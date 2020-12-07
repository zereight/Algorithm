import sys
from collections import deque
from itertools import combinations
import copy
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))
board = []
virusPos = []
nothingPos = []
direction = [
    []
]
for row in range(n):
    board.append(input().rstrip().split(" "))
    for col in range(m):
        if(board[row][col] == 0):
            nothingPos.append([row, col])
        elif(board[row][col] == 1):
            virusPos.append([row, col])


def bfs(wallPos, board, virusPos):
    newBoard = copy.deepcopy(board)
    for x, y in wallPos:
        newBoard[x][y] = 1
    zeroCnt = n*m - len(wallPos) - len(virusPos)
    q = deque(virusPos)
    while(q):
        curr_x, curr_y = q.popleft()
        for a, b in direction:
            nx, ny = curr_x+a, curr_y+b
            if(nx >= 0 and ny >= 0 and nx < n and ny < m):
                if(board[nx][ny] == 0):
                    q.append([nx, ny])
                    board[nx][ny] = 2
                    zeroCnt -= 1


for wallPos in combinations(nothingPos, 3):
    pass
