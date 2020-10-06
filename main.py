import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))

board = []
for _ in range(n):
    board.append(list(map(int, input().rstrip().split(" "))))

# 상,하,좌,우
direction_x = [-1, 1, 0, 0]
direction_y = [0, 0, -1, 1]

# 순회하면서 섬의 영역을 찾고 좌표를 저장한다.


def find_islands():
    global board, direction_x, direction_y
    visited = [[0]*(m) for _ in range(n)]

    q = deque()

    islands = []

    for row in range(n):
        for col in range(m):
            # 순회하다가 섬의 시작점으로 추정되는 곳에서 시작
            if(board[row][col] == 1 and visited[row][col] == 0):
                islands.append([])  # 새로운 섬 넣기
                q.append((row, col))
                visited[row][col] = 1

                while(len(q) != 0):
                    x, y = q.popleft()

                    islands[-1].append((x, y))  # 섬 좌표 1개씩 넣기
                    for i in range(4):
                        new_x = x+direction_x[i]
                        new_y = y+direction_y[i]

                        if(new_x >= 0 and new_x <= n-1 and new_y >= 0 and new_y <= m-1):
                            # 바다거나 방문한곳이면 패쓰
                            if(visited[new_x][new_y] == 0
                               and board[new_x][new_y]):
                                q.append((new_x, new_y))
                                visited[new_x][new_y] = 1

    return islands


# board의 섬좌표에 각각의 섬의 이름을 대입한다.
def naming_islands(islands):
    for idx, points in enumerate(islands):
        for point in points:
            x, y = point
            board[x][y] = idx+1  # 1부터 섬이름 붙임

# 섬의 각 좌표에서 상,하,좌,우로 직선을 그어 섬에 도달하는 다리를 만들고 저장한다.


def make_bridge(islands):
    global board, direction_x, direction_y
    graph = []

    for points in islands:
        for point in points:
            # 상,하,좌,우 로 직진

            for i in range(4):
                new_x, new_y = point
                curr_x, curr_y = point
                dist = 0
                while(1):
                    new_x = new_x+direction_x[i]
                    new_y = new_y+direction_y[i]

                    # 맵 벗어나면 종료
                    if(
                        new_x < 0 or new_x > n-1 or new_y < 0 or new_y > m-1
                    ):
                        break
                    # 다른 섬에 도착하면 종료
                    elif(
                        board[new_x][new_y] != 0 and  # 육지면서
                        (new_x, new_y) not in points  # 현재 섬에 포함되지 않는 => 다른섬
                    ):
                        # 다리의 최소길이는 2이상이어야함
                        if(dist >= 2):
                            graph.append(
                                (board[curr_x][curr_y],
                                 board[new_x][new_y], dist)
                            )
                        break
                    else:
                        # 바다면 다리길이 추가
                        if(board[new_x][new_y] == 0):
                            dist += 1

                        elif(board[new_x][new_y] >= 1):
                            # '''
                            # 아래처럼 0을 2번지나가는 경우까지 고려
                            # 1 1 1
                            # 1 0 1
                            # 0 1 1
                            # 0 0 0
                            # 0 1 0
                            # '''
                            dist = 0

    return graph


# 루트노드를 찾는 함수(재귀)


def find_root_nodes(x):
    global parents
    if(parents[x] != x):
        parents[x] = find_root_nodes(parents[x])
    return parents[x]


# union


def union(a, b):
    global parents
    a = find_root_nodes(a)
    b = find_root_nodes(b)
    if(a < b):
        parents[b] = a
    else:
        parents[a] = b


islands = find_islands()
naming_islands(islands)
graph = make_bridge(islands)
graph = sorted(graph, key=lambda x: x[2])

# 크루스칼 용 parent
parents = [0]*(1 + len(islands))
# 자기자신을 부모로
for i in range(1+len(islands)):
    parents[i] = i

answer = 0

for edge in graph:
    start, end, d = edge
    if(find_root_nodes(start) != find_root_nodes(end)):
        union(start, end)
        answer += d

# 모든 섬의 루트노드가 같은지 체크
allConnected = True
temp = find_root_nodes(1)
for i in range(1, len(islands)+1):
    if(temp != find_root_nodes(i)):  # 부모가 다른 노드가 있다면 스패닝트리로 합쳐지지 않은 것
        allConnected = False

if(allConnected == False or answer == 0):
    print(-1)
else:
    print(answer)

# for i in board:
#     print(" ".join(map(str, i)))
# print(graph)

# print(parents)
# print(answer)
