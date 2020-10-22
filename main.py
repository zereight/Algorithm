import sys
sys.setrecursionlimit(10**6)
board = []
n = 5
for _ in range(n):
    board.append([*map(int, input().rstrip().split(" "))])

answer = set()


def dfs(x, y, string):
    global answer, board, n
    if(len(string) == 6):
        answer.add(string)
        return

    for a, b in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        if(x+a >= 0 and y+b >= 0 and x+a < n and y+b < n):
            dfs(x+a, y+b, string+str(board[x+a][y+b]))


for i in range(5):
    for j in range(5):
        dfs(i, j, str(board[i][j]))

print(len(answer))
