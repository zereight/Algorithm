n = int(input().rstrip())
a, b = map(int, input().rstrip().split(" "))
m = int(input().rstrip())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    c, d = map(int, input().rstrip().split(" "))
    graph[c].append(d)
    graph[d].append(c)

values = [-1] * (n+1)  # (group_num, value)
values[a] = 0


def dfs(curr):
    global graph, values

    for dest in graph[curr]:
        if(values[dest] == -1):
            values[dest] = values[curr]+1
            dfs(dest)


dfs(a)

if(values[b] == -1):  # a부터 갈 수 있는 곳은 다들렀을텐데 b값이 -1이면 가족이 아닌거
    print(-1)
else:
    # print(values)
    print(abs(values[a]-values[b]))
