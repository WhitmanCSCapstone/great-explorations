from itertools import combinations
from collections import defaultdict
from time import time
import math
import operator
import pycosat

def bipartite_flip(d):
    fd = defaultdict(lambda: [], dict())
    for k, vs in d.items():
        for v in vs:
            fd[v].append(k)
    return dict(fd)

def bipartite_negate(d):
    return { k: [v*-1 for v in vs] \
                for k, vs in d.items() }

def cnf_combo(d, n, op=operator.eq):
    cnf = []
    if op == operator.eq:
        cnf = cnf_combo(d, n, operator.ge) + \
              cnf_combo(d, n, operator.le)
    else:
        # To accept list of list as input, turn into dictionary with junk keys
        if isinstance(d, list):
            d = { i: d[i] for i in range(len(d)) }
        # Prepare different items depending on operation
        items = []
        if op == operator.ge:
            items = d.items()
        elif op == operator.le:
            items = bipartite_negate(d).items()
        else:
            print(op, "is not supported by `cnf_op`")
            return None
        # Create cnf combos
        for k, vs in items:
            # Combination size, i.e. workshop capacity
            c = n[k-1] if isinstance(n, list) else n
            c = len(vs)-c if (op == operator.ge) else c
            cnf.extend(combinations(vs, c+1))
        # Convert tuples to lists
        cnf = [[n for n in m] for m in cnf]
    return cnf

def cnf_var_freq(cnf):
    freq = defaultdict(lambda: 0, dict())
    for clause in cnf:
        for var in clause:
            freq[var] += 1
    return freq

def solution_is_valid(sessions, wcaps, solution):
    countwcaps = [list(wcaps) for _ in range(sessions)]
    totalseats = 0
    for w in wcaps:
        totalseats += w
    fillratio = len(solution)/totalseats
    for s in range(sessions):
        for g, ws in solution.items():
            countwcaps[s][ws[s]-1] -= 1
    for s in countwcaps:
        for i in range(len(s)):
            # If underfilled, it's invalid
            if wcaps[i] - s[i] < math.floor(wcaps[i]*fillratio):
                return False
    return True

def bipartite_test_print(sessions, wcaps, gprefs, sol_print=True):
    begin = time()
    print("--- "+str(sessions)+"s, "+str(len(wcaps))+"w, "+str(len(gprefs))+ \
            "g, "+str(len(gprefs[1]))+"p --- gprefs:", gprefs)
    no_solution = True
    all_valid = True
    sol_count = 0
    for sol in bipartite_solve(sessions, wcaps, gprefs):
        sol_count += 1
        no_solution = False
        if not solution_is_valid(sessions, wcaps, sol):
            all_valid = False
            print(">>>", sol)
        elif sol_print:
            print("   ", sol)
    if no_solution:
        print("[?] The solver produced no solutions.")
    elif all_valid:
        print("[.] All solutions are valid. Count:", sol_count)
    print("Runtime: "+str(time()-begin)+"s")
    print()

def bipartite_solve(sessions, wcaps_param, gprefs_param):
    wcaps = []
    gprefs = defaultdict(lambda: [], dict())
    wcount = len(wcaps_param)
    gcount = len(gprefs_param)
    totalseats = 0
    for w in wcaps_param:
        totalseats += w
    fillratio = len(gprefs_param)/totalseats
    # Expand gprefs and wcaps to account for each session
    for s in range(sessions):
        s = wcount*s
        wcaps.extend(wcaps_param)
        for g, ws in gprefs_param.items():
            gprefs[g].extend([s+w for w in ws])
    # Translate raw numbers to cnf variable numbers
    gtow = { g: [(gcount*(w-1))+g for w in ws] \
                for g, ws in gprefs.items() }
    # Create flipped bipartite and translate numbers similar to above
    wtog = { w: [(gcount*(w-1))+g for g in gs] \
                for w, gs in bipartite_flip(gprefs).items() }
    # Build the cnf
    cnf = cnf_combo(gtow, sessions) + \
          cnf_combo(wtog, [math.floor(w*fillratio) for w in wcaps],
                  operator.ge) + \
          cnf_combo(wtog, wcaps, operator.le)
    # Exactly one workshop (eows) per person per timeslot, and
    # No same workshop (nsws) multiple times in diff timeslots
    for g, ws in gtow.items():
        nprefs = len(ws)//sessions
        clause_eows = []
        clauses_nsws = [[] for _ in range(nprefs)]
        for i in range(len(ws)):
            clause_eows.append(ws[i])
            clauses_nsws[i%nprefs].append(ws[i])
            # Determine if we finished a timeslot, then add to cnf
            if i%nprefs == nprefs-1:
                cnf.extend(cnf_combo([clause_eows], 1))
                clause_eows = []
        cnf.extend(cnf_combo(clauses_nsws, 1, operator.le))
    # Count frequencies, variables not present get their own "not clause"
    freq = cnf_var_freq(cnf)
    for var in range(1, gcount*wcount*sessions):
        if freq[var] == 0:
            cnf.append([-var])
    # Use PycoSAT to solve, then untranslate cnf variable numbers
    sols = []
    for satsol in pycosat.itersolve(cnf):
        sol = defaultdict(lambda: [], dict())
        for i in range(len(satsol)):
            if (satsol[i] > 0):
                g = (i%gcount)+1
                w = (((satsol[i]-g)//len(gprefs))%wcount)+1
                sol[g].append(w)
        sols.append(dict(sol))
    return sols

def main():
    bipartite_test_print(1, [1, 1, 1], \
            { 1: [1, 2], 2: [1, 3], 3: [2, 3] })

    bipartite_test_print(1, [40, 30, 50], \
            { 1: [1, 2], 2: [1, 2], 3: [1, 2], \
              4: [2, 3], 5: [2, 3], 6: [2, 3], \
              7: [2, 3], 8: [2, 3], 9: [2, 3] })

    bipartite_test_print(1, [2, 2, 2, 2], \
            { 1: [1, 3], 2: [1, 2], 3: [2, 3], 4: [2, 4], \
              5: [2, 3], 6: [1, 4], 7: [3, 4], 8: [1, 4] })

    bipartite_test_print(1, [1, 3, 1, 3], \
            { 1: [1, 3], 2: [1, 2], 3: [2, 3], 4: [2, 4], \
              5: [2, 3], 6: [1, 4], 7: [3, 4], 8: [1, 4] })

    bipartite_test_print(2, [1, 1, 1], \
            { 1: [1, 2], \
              2: [1, 3], \
              3: [2, 3] })

    bipartite_test_print(2, [2, 2, 2], \
            { 1: [1, 2], 2: [1, 3], 3: [2, 3], \
              4: [1, 2], 5: [1, 3], 6: [2, 3] })

    bipartite_test_print(3, [1, 1, 1], \
            { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3] })

    bipartite_test_print(3, [2, 2, 2], \
            { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], \
              4: [1, 2, 3], 5: [1, 2, 3], 6: [1, 2, 3] }, False)

    bipartite_test_print(3, [2, 2, 2, 2], \
            { 1: [1, 2, 3], 2: [1, 2, 4], 3: [1, 3, 4], 4: [2, 3, 4], \
              5: [1, 2, 3], 6: [1, 2, 4], 7: [1, 3, 4], 8: [2, 3, 4] }, False)

    bipartite_test_print(4, [1, 1, 1, 1, 1], \
            { 1: [1, 2, 3, 4], 2: [1, 2, 3, 5], 3: [1, 2, 4, 5], \
              4: [1, 3, 4, 5], 5: [2, 3, 4, 5] }, False)

    return None
    # Below takes basically forever
    prefs = defaultdict(lambda: [], dict())
    combo = [[n for n in c] for c in combinations([1, 2, 3, 4], 3)]
    for i in range(12):
        prefs[i+1] = combo[i%4]
    prefs = dict(prefs)
    bipartite_test_print(3, [3, 3, 3, 3], prefs, False)

if __name__ == '__main__':
    main()
