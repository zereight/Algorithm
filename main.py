import sys
from collections import deque
input = sys.stdin.readline

n = int(input().rstrip())

graph = dict()
for i in range(1, n+1):
    graph[i] = []
inDegree = [0]*(n+1)

costs = [0]*(n+1)
for i in range(1, n+1):
    info = list(map(int, input().rstrip().split(" ")))[:-1]
    costs[i] = info[0]
    must_list = info[1:]

    for j in must_list:
        graph[j].append(i)
        inDegree[i] += 1  # InDegree 증가

spendTime = [0]*(n+1)
while(1):
    q = deque()
    for i in range(1, n+1):  # indegree 0인거 추가
        if(inDegree[i] == 0):
            q.append(i)
            inDegree[i] -= 1

    if(len(q) == 0):
        break

    # InDegree 0인 건물에 한해서 동시 건축
    while(len(q) != 0):
        building = q.pop()
        spendTime[building] += costs[building]

        # 연결된 간선에 indegree - 1
        for g in graph[building]:
            inDegree[g] -= 1
            spendTime[g] = max(spendTime[g], spendTime[building])

for i in spendTime[1:]:
    print(i)
