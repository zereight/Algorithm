import sys
import copy
from collections import deque
from itertools import combinations
sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))

board = []
virus_pos = []
zero_count = 0
for i in range(n):
    temp = list(map(int, input().rstrip().split(" ")))
    for j in range(n):
        if(temp[j] == 2):
            virus_pos.append((i, j))
            temp[j] = 0  # 바이러스 있는곳도 랜덤으로 위치시켜줄거니까 일단 0
            zero_count += 1  # 빈공간 몇개인지 세주기
        elif(temp[j] == 0):
            zero_count += 1  # 빈공간 몇개인지 세주기
    board.append(temp)


def bfs(n, board, virus_lists, zero_count):
    # 상,하,좌,우
    direction = [
        (-1, 0), (1, 0), (0, -1), (0, 1)
    ]

    newBoard = copy.deepcopy(board)
    visited = [[-1]*n for _ in range(n)]
    q = deque()
    count = 0
    for v in virus_lists:  # 바이러스 먼저 큐에 넣고, 방문처리
        q.append(v)
        visited[v[0]][v[1]] = count

    max_time = 0
    available_space = zero_count - len(virus_lists)  # 현재 남은 빈공간개수

    while(len(q) != 0):
        x, y = q.popleft()

        for i in range(4):
            new_x, new_y = x+direction[i][0], y+direction[i][1]

            if(new_x >= 0 and new_y >= 0 and new_x < n and new_y < n):
                if(newBoard[new_x][new_y] == 0 and visited[new_x][new_y] == -1):
                    q.append((new_x, new_y))
                    visited[new_x][new_y] = visited[x][y]+1  # 카운트
                    max_time = max(max_time, visited[new_x][new_y])
                    available_space -= 1  # 빈공간 1개 삭제

                    if(available_space <= 0):  # 빈공간이 0이 되었으면
                        # print()
                        # for v in visited:
                        #     print(v)
                        return max_time
    # print()
    # for v in visited:
    #     print(v)
    # print(available_space)
    if(available_space <= 0):
        '''
        예제 히든테케 통과용
        5 2
        1 1 1 1 1
        1 1 1 1 1
        1 1 1 1 1
        1 1 1 1 1
        1 1 2 2 1
        '''
        return max_time

    return -1  # 빈공간0에 도달하지 못했음


answer = float('inf')
for s in combinations(virus_pos, m):
    res = bfs(n, board, s, zero_count)
    if(res != -1):
        answer = min(answer, res)

if(answer == float("inf")):  # 전부 -1이었던것..
    print(-1)
else:
    print(answer)
