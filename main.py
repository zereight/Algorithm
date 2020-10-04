import sys
input = sys.stdin.readline

n = int(input())

dp = []
for _ in range(n+1):
  dp.append( [0]*(11) )

# dp[i][j] i길이의 숫자에서 맨왼쪽숫자가 j일때 개수

for i in range(1,11):
  dp[1][i] = 1

for i in range(2,n+1):
  for j in range(1,11):
    dp[i][j] = sum(dp[i-1]) - sum(dp[i-1][:j])

print(sum(dp[n])%10007)
