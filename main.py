import sys
import copy
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))

chicken_pos = []
house_pos = []
for i in range(n):
    row = list(map(int, input().rstrip().split(" ")))
    for j in range(n):
        if(row[j] == 2):
            chicken_pos.append((i, j))
        elif(row[j] == 1):
            house_pos.append((i, j))


def getChickenDistance(a, b):
    return abs(a[0]-b[0]) + abs(a[1]-b[1])


answer = float('inf')
for s in combinations(chicken_pos, m):  # 살릴 치킨집 경우의 수 모두 출력
    myCityDistance = 0
    for h in house_pos:  # 각 집의 치킨거리를 구함
        myChickenDistance = float('inf')
        for _s in s:
            myChickenDistance = min(
                getChickenDistance(h, _s), myChickenDistance)
        myCityDistance += myChickenDistance
    answer = min(answer, myCityDistance)

print(answer)
