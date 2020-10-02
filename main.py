import sys
input = sys.stdin.readline

n = int(input().rstrip())
info = []
for _ in range(n):
  start, end = map(int, input().rstrip().split(" "))
  info.append( (start, end) )

info = sorted(info, key=lambda x: (x[1], x[0]))

count = 0
lastest_time = 0

for i in info:
  if(i[0]>=lastest_time):
    count+=1
    lastest_time=i[1]

print(count)
