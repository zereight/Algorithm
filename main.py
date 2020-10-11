import sys
import bisect
input = sys.stdin.readline

n = int(input().rstrip())
x = []
answers = []
for _ in range(n):
    bisect.insort(x, int(input().rstrip()))
    if(len(x) % 2 == 0):
        answers.append(x[int(len(x)/2)-1])
    else:
        answers.append(x[int(len(x)/2)])

for a in answers:
    print(a)
