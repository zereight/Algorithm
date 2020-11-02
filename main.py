import sys
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))

board = [[*map(int, input().rstrip().split(" "))] for _ in range(n)]
dp = [[0]*m for _ in range(n)]

dp[0][0] = board[0][0]

for i in range(n):
    for j in range(m):
        for a, b in ((1, 0), (0, 1), (1, 1)):
            new_i = i+a
            new_j = j+b
            if(new_i >= 0 and new_j >= 0 and new_i < n and new_j < m):
                dp[new_i][new_j] = max(
                    dp[new_i][new_j], board[new_i][new_j]+dp[i][j])

print(dp[n-1][m-1])
