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

def cnf_from_bipartite(gprefs, wcaps, gcap):
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
        cnf.extend(combinations(ws, len(ws)-gcap+1))
    for w, gs in wtog.items():
        cnf.extend(combinations(gs, len(gs)-wcaps[w-1]+1))
    for _, ws in ngtow.items():
        cnf.extend(combinations(ws, gcap+1))
    for w, gs in nwtog.items():
        cnf.extend(combinations(gs, wcaps[w-1]+1))
    # Convert tuples to lists
    cnf = [[n for n in m] for m in cnf]
    # Count frequencies, variables not present get their own "not clause"
    freq = cnf_var_freq(cnf)
    for var in range(1, len(wcaps)*len(gprefs)):
        if freq[var] == 0:
            cnf.append([-var])
    # Done!
    return cnf

def main():
    cnf = cnf_from_bipartite( \
            {1: [1, 2, 3], 2: [1, 3, 5], 3: [4, 5, 6]}, \
            [1, 1, 1, 1, 1, 1], \
            2 )
    for sol in itersolve(cnf):
        print(sol)

if __name__ == '__main__':
    main()
