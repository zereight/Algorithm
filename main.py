import sys
from collections import deque
input = sys.stdin.readline


def bfs(board, visited, row, col, marking):
    w, h = len(board[0]), len(board)
    # 상,하,좌,우, 좌상, 좌하, 우상, 우하
    direction_x = [-1, 1, 0, 0, -1, 1, -1, 1]
    direction_y = [0, 0, -1, 1, -1, -1, 1, 1]

    q = deque()

    q.append((row, col))
    while(len(q) != 0):

        x, y = q.pop()
        visited[x][y] = marking
        for i in range(8):
            new_x, new_y = x+direction_x[i], y+direction_y[i]

            # 유효범위인가
            if(new_x >= 0 and new_y >= 0 and new_x < h and new_y < w):
                # 육지이고, 방문하지 않았는가
                if(board[new_x][new_y] == 1 and visited[new_x][new_y] == 0):
                    q.append((new_x, new_y))


answers = []
while(1):
    w, h = map(int, input().rstrip().split(" "))

    if(w == 0 and h == 0):
        break

    board = []
    for _ in range(h):
        board.append(list(map(int, input().rstrip().split(" "))))

    visited = [[0]*w for _ in range(h)]

    # visited에서 같은 육지에서는 같은 marking값을 가지게 해줌
    marking = 1
    for i in range(h):
        for j in range(w):
            if(board[i][j] == 1 and visited[i][j] == 0):
                bfs(board, visited, i, j, marking)
                marking += 1

    flat_board = []
    for b in visited:
        flat_board.extend(b)

    if(0 in flat_board):  # 0이 포함되어있다면 -1빼줌, visited에서 0은 방문하지 않은 것이므로,
        answers.append(len(set(flat_board)) - 1)
    else:  # 0이 없는경우는 다 방문한것.
        answers.append(len(set(flat_board)))
for a in answers:
    print(a)
