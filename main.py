import sys
input = sys.stdin.readline

n = int(input().rstrip())
k = int(input().rstrip())

points = list(map(int, input().rstrip().split(" ")))

# 정렬
points = sorted(list(set(points)))

gap = []
if(len(points) > 1):
    for i in range(0, len(points)-1):
        gap.append(abs(points[i]-points[i+1]))
    gap = sorted(gap)
    for i in range(k-1):
        gap.pop()

print(sum(gap))
