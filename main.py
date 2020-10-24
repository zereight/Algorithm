import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
n = int(input().rstrip())

parents = [i for i in range(n+1)]  # 자기자신을 부모로하는 정보배열

graph = dict()
for i in range(1, n+1):
    graph[i] = []


for _ in range(n-1):
    a, b = map(int, input().rstrip().split(" "))
    graph[a].append(b)
    graph[b].append(a)


def dfs(curr):
    global parents, graph

    for dest in graph[curr]:
        if(parents[dest] == dest):
            parents[dest] = curr
            dfs(dest)


def answer():
    global parents
    for i in parents[2:]:
        print(i)


dfs(1)
answer()
