import copy
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
R, C = map(int, input().rstrip().split(" "))
board = []
for _ in range(R):
    board.append(list(input().rstrip()))


d = dict()
for i in range(ord('A'), ord('Z')+1):
    d[chr(i)] = 0  # 0은 미방문, 1은 방문

# 상하좌우
direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]

answer = 1


def bfs(curr_x, curr_y):
    global d, board, R, C, direction, answer
    q = set()
    q.add((curr_x, curr_y, board[curr_x][curr_y]))
    while(len(q) != 0):
        x, y, s = q.pop()
        for i in range(4):
            new_x, new_y = x+direction[i][0], y+direction[i][1]
            if(new_x >= 0 and new_y >= 0 and new_x < R and new_y < C):
                if(board[new_x][new_y] not in s):
                    q.add((new_x, new_y, s+board[new_x][new_y]))
                    answer = max(answer, len(s)+1)


bfs(0, 0)
print(answer)
# print(res)
