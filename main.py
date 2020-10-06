import sys
input = sys.stdin.readline
n = int(input().rstrip())
have = list(map(int, input().rstrip().split(" ")))
m = int(input().rstrip())
cards = list(map(int, input().rstrip().split(" ")))
have = sorted(have)
counts = dict()
for h in have:
    try:
        counts[h] += 1
    except:
        counts[h] = 1
answers = []
for c in cards:
    try:
        answers.append(counts[c])
    except:
        answers.append(0)
print(" ".join(map(str, answers)))
