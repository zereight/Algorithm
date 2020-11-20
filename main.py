import sys
input = sys.stdin.readline

n = int(input().rstrip())
points = []
for _ in range(n):
    points.append([*map(int, input().rstrip().split(" "))])

points = sorted(points, key=lambda p: (p[1], p[0]))

for p in points:
    print(" ".join([*map(str, p)]))
