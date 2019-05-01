from itertools import combinations
from collections import defaultdict
from time import time
import math
import operator
import pycosat
import random

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

def bipartite_random_prefs(wcount, gcount, pcount):
    gprefs = defaultdict(lambda: [], dict())
    for g in range(gcount):
        ws = [w+1 for w in range(wcount)]
        for p in range(pcount):
            w = random.choice(ws)
            gprefs[g+1].append(w)
            ws.remove(w)
    return dict(gprefs)

def bipartite_test_print(sessions, wcaps, gprefs, verbose=True):
    if verbose:
        print("--- "+str(sessions)+"s, "+str(len(wcaps)).zfill(2)+"w, "+ \
                str(len(gprefs)).zfill(3)+"g, "+ str(len(gprefs[1]))+"p ---")
        print("gprefs:", gprefs, "\nwcaps:", wcaps)
    totrun = time()
    satrun = time()
    sols = bipartite_solve(sessions, wcaps, gprefs, verbose)
    satrun = time() - satrun
    no_solution = True
    all_valid = True
    for sol in sols:
        no_solution = False
        if not solution_is_valid(sessions, wcaps, sol):
            all_valid = False
            print(">>>", sol)
        elif verbose:
            print("solution:", sol)
    if verbose:
        if no_solution:
            print(">>> The solver produced no solutions.")
        elif all_valid:
            print("All proposed solutions are valid.")
        print("SAT Runtime:            "+str(round(satrun*1000))+"ms")
        #print("Total Runtime:  "+str(round((time()-totrun)*1000))+"ms")
        print()
    return satrun

def bipartite_test_print_random(sessions, wcount, gcount, pcount, n, verbose=False):
    # If rand workshop capacity randomness, add random.randint(0,2) for example
    total = 0
    for i in range(n):
        total += bipartite_test_print(sessions, \
                [math.ceil(gcount/wcount) for w in range(wcount)], \
                bipartite_random_prefs(wcount, gcount, pcount), verbose)
    print(str(sessions)+"s, "+str(wcount).zfill(2)+"w, "+ \
            str(gcount).zfill(3)+"g, "+ \
            str(pcount)+"p --- Average runtime: "+ \
            str(round((total/n)*1000))+"ms")

def bipartite_solve(sessions, wcaps_param, gprefs_param, verbose=True):
    wcaps = []
    wcount = len(wcaps_param)
    gcount = len(gprefs_param)
    totalseats = 0
    for w in wcaps_param:
        totalseats += w
    fillratio = len(gprefs_param)/totalseats
    # Until each workshop has enough prefs pointing to it
    gprefs = {}
    gtow = {}
    wtog = {}
    enoughprefs = False
    fudgefactor = 0
    while not enoughprefs:
        # Expand gprefs and wcaps to account for each session
        gprefs = defaultdict(lambda: [], dict())
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
        # In case there's a ws that nobody prefd
        for w in range(len(wcaps_param)):
            if w+1 not in wtog:
                wtog[w+1] = []
        # Get ratios of prefd-to-capacity
        prefratios = defaultdict(lambda: 0, dict())
        for k, vs in wtog.items():
            prefratios[k] = len(vs)/wcaps[k-1]
        # Check for under-prefd ws
        enoughprefs = True
        for w, gs in wtog.items():
            if len(gs) < math.floor(wcaps[w-1]*fillratio)*sessions:
                enoughprefs = False
                fudgefactor += 1
                # Steal preferences from the most popular (highest prefratio)
                wmax = max(prefratios, key=prefratios.get)
                gran = -1
                while gran == -1 or w in gprefs_param[gran]:
                    gran = random.choice([g-(gcount*(wmax-1)) for g in wtog[wmax]])
                gprefs_param[gran].remove(wmax)
                gprefs_param[gran].append(w)
                break
    if fudgefactor > 0 and verbose:
        print("Had to fudge", fudgefactor, "girl's preferences to "
                "guarantee the existence of a solution.")
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
    # `itersolve` returns array of all solutions, but may run MUCH slower
    sols = []
    #for satsol in pycosat.itersolve(cnf):
    for satsol in [pycosat.solve(cnf)]:
        sol = defaultdict(lambda: [], dict())
        if satsol == "UNSAT":
            print("UNSATISFIABLE")
            break
        for i in range(len(satsol)):
            if (satsol[i] > 0):
                g = (i%gcount)+1
                w = (((satsol[i]-g)//len(gprefs))%wcount)+1
                sol[g].append(w)
        sols.append(dict(sol))
    return sols

def main():
    '''
    bipartite_test_print(1, [1, 1, 1], \
            { 1: [1, 2], 2: [1, 3], 3: [2, 3] })

    bipartite_test_print(2, [1, 1, 1], \
            { 1: [1, 2], 2: [1, 3], 3: [2, 3] })

    bipartite_test_print(3, [1, 1, 1], \
            { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3] })

    # This should result in the fudging of three girl's preferences
    bipartite_test_print(1, [4, 3, 5], \
            { 1: [2, 3], 2: [2, 3], 3: [2, 3], \
              4: [2, 3], 5: [2, 3], 6: [2, 3], \
              7: [2, 3], 8: [2, 3], 9: [2, 3] })

    for i in range(3):
        bipartite_test_print_random(1, 3, 9, 3)

    for i in range(3):
        bipartite_test_print_random(2, 4, 8, 3)
    '''

    # Average runtime taken from n samples
    n = 10

    # Vary only one at a time
    if False:
        # wcount
        bipartite_test_print_random(3, 3, 3, 3, n)
        bipartite_test_print_random(3, 6, 3, 3, n)
        bipartite_test_print_random(3, 9, 3, 3, n)
        bipartite_test_print_random(3, 12, 3, 3, n)
        bipartite_test_print_random(3, 15, 3, 3, n)
        bipartite_test_print_random(3, 18, 3, 3, n)
        bipartite_test_print_random(3, 21, 3, 3, n)
        # gcount
        bipartite_test_print_random(3, 3, 3, 3, n)
        bipartite_test_print_random(3, 3, 6, 3, n)
        bipartite_test_print_random(3, 3, 9, 3, n)
        bipartite_test_print_random(3, 3, 12, 3, n)
        bipartite_test_print_random(3, 3, 15, 3, n)
        bipartite_test_print_random(3, 3, 18, 3, n)
        bipartite_test_print_random(3, 3, 21, 3, n)

    # g:w ratio
    for r in range(1, 8):
        print("################################################ R="+str(r))
        # pcount
        for p in range(3,7):
            # wcount
            for w in range(6, 16):
                bipartite_test_print_random(3, w, w*r, p, n)
            print("------------------------------------------------")

if __name__ == '__main__':
    main()
