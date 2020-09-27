import sys input = sys.stdin.readline n = int(input()) cardPack = dict() for i,v in enumerate(map(int, input().rstrip().split(" "))): cardPack[i+1] = v # dp[i]는 i개의 카드를 산다했을때 가장 많이 지불할 수 있는 가격 dp = [0] * (n+1) dp[1] = cardPack[1] for i in range(1, n+1): for j in range(i,0,-1): dp[i] = max([ dp[i], cardPack[i], dp[i-j] + cardPack[j] ]) print(dp[n])

출처: https://zereight.tistory.com/633 [Zereight's Blog]
