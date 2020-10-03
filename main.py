import sys
input = sys.stdin.readline

T = int(input().rstrip())

btns = [300,60,10]
counts = [0,0,0]

for i,btn in enumerate(btns):
  counts[i] += T//btn
  T = T%btn

if(T==0):
  print(" ".join(map(str,counts)))
else:
  print(-1)
