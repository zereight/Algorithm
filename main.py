import sys
import math

n = int(input().rstrip())

dp = [0]*(n+1)

dp[1] = 1
dp[2] = 2
dp[3] = 3

pows = []  # 제곱수들
for i in range(4, n+1):
    if(i in b):
        dp[i] = 1
        pows.append(i)
    else:

        dp[i] = min([*map(lambda x:dp[x] + dp[i-x], pows)])

print(dp[n])
