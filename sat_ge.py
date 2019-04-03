from pycosat import itersolve
from itertools import combinations
from collections import defaultdict

def bipartite_flip(d):
    fd = defaultdict(lambda: [], dict())
    for k, vs in d.items():
        for v in vs:
            fd[v].append(k)
    return dict(fd)

def bipartite_negate(d):
    return { k: [v*-1 for v in vs] \
                for k, vs in d.items() }

def cnf_var_freq(cnf):
    freq = defaultdict(lambda: 0, dict())
    for clause in cnf:
        for var in clause:
            freq[var] += 1
    return freq

def bipartite_solve(wcaps, gprefs):
    # Translate raw numbers to cnf variable numbers
    gtow = { g: [(len(wcaps)*(g-1))+w for w in ws] \
                for g, ws in gprefs.items() }
    # Create flipped bipartite and translate numbers similar to above
    wtog = { w: [(len(wcaps)*(g-1))+w for g in gs] \
                for w, gs in bipartite_flip(gprefs).items() }
    # Copies of above except all values negative
    ngtow = bipartite_negate(gtow)
    nwtog = bipartite_negate(wtog)
    # Build the cnf
    cnf = []
    for _, ws in gtow.items():
        cnf.extend(combinations(ws, len(ws)))
    for w, gs in wtog.items():
        cnf.extend(combinations(gs, len(gs)-wcaps[w-1]+1))
    for _, ws in ngtow.items():
        cnf.extend(combinations(ws, 2))
    for w, gs in nwtog.items():
        cnf.extend(combinations(gs, wcaps[w-1]+1))
    # Convert tuples to lists
    cnf = [[n for n in m] for m in cnf]
    # Count frequencies, variables not present get their own "not clause"
    freq = cnf_var_freq(cnf)
    for var in range(1, len(wcaps)*len(gprefs)):
        if freq[var] == 0:
            cnf.append([-var])
    # Use PycoSAT to solve, then untranslate cnf variable numbers
    sols = []
    for satsol in itersolve(cnf):
        sol = defaultdict(lambda: 0, dict())
        for i in range(len(satsol)):
            if (satsol[i] > 0):
                g = i//len(wcaps)
                sol[g+1] = satsol[i] - (g*len(wcaps))
        sols.append(dict(sol))
    return sols

def main():
    print("3w, 3g, 2p")
    sols = bipartite_solve([1, 1, 1], \
            { 1: [1, 2], \
              2: [1, 3], \
              3: [2, 3] })
    for sol in sols: print(sol)
    print("4w, 8g, 2p")
    sols = bipartite_solve([2, 2, 2, 2], \
            { 1: [1, 3], 2: [1, 2], 3: [2, 3], 4: [2, 4], \
              5: [2, 3], 6: [2, 4], 7: [3, 4], 8: [2, 4] })
    for sol in sols: print(sol)
    print("4w, 8g, 2p; but with diff capacities")
    sols = bipartite_solve([1, 3, 1, 3], \
            { 1: [1, 3], 2: [1, 2], 3: [2, 3], 4: [2, 4], \
              5: [2, 3], 6: [2, 4], 7: [3, 4], 8: [2, 4] })
    for sol in sols: print(sol)


if __name__ == '__main__':
    main()
