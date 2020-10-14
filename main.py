import sys
from collections import deque
from itertools import combinations
import copy
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))

# 0은 빈칸, 1은 벽, 2는 바이러스

board = []
virus_pos = []
nothing_area = []  # 0인 공간
for i in range(n):
    row = list(map(int, input().rstrip().split(" ")))
    board.append(row)
    for j in range(m):
        if(row[j] == 2):
            virus_pos.append((i, j))
        elif(row[j] == 0):
            nothing_area.append((i, j))


# 모든 조합을 다 찾아야함, dp로 풀기 어려움

def build_wall(wall_pos, board, virus_pos):
    global n, m, answer
    # 상하좌우
    direction = ((-1, 0), (1, 0), (0, -1), (0, 1))

    board = copy.deepcopy(board)  # deepcopy
    # 3개의 벽을 세울 좌표를 찍는다.
    for i, j in wall_pos:
        board[i][j] = 1

    # 전염 전 총 0개수
    zero_count = n*m - len(wall_pos) - len(virus_pos)

    # 바이러스가 퍼진다.
    for vx, vy in virus_pos:
        q = deque()
        q.append((vx, vy))

        while(len(q) != 0):
            x, y = q.popleft()
            for i in range(4):
                new_x, new_y = x+direction[i][0], y+direction[i][1]
                # 유효범위체크
                if(new_x >= 0 and new_y >= 0 and new_x < n and new_y < m):
                    # 벽아니고 바이러스 아닌곳만, 즉, 빈곳만
                    if(board[new_x][new_y] == 0):
                        q.append((new_x, new_y))
                        board[new_x][new_y] = 2  # 미리마킹해서 큐에 안들어가게 해줌. 속도빠르게1
                        zero_count -= 1
                        if(zero_count < answer):  # 0의 개수가 줄어드는데 전역변수 answer보다 작으면 의미없으므로 조기종료. 속도빠르게2
                            return -1
    # 0의 개수를 센다.

    res = 0
    for b in board:
        # print(b)
        res += b.count(0)
    return res

# 예제1
# print(build_wall([(0, 1), (1, 0), (3, 5)], board, virus_pos))


answer = 0
for a in combinations(nothing_area, 3):
    res = build_wall(a, board, virus_pos)
    if(answer < res):
        answer = res
print(answer)
