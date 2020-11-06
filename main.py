import sys
import math

n = int(input().rstrip())

dp = [0]*(n+1)

for j in range(1, n+1):
    dp[j] = j
    for i in range(1, j):
        if(i**2 > j):
            break

        dp[j] = min(dp[j], dp[j - i**2] + 1)

print(dp[n])
