import sys
input = sys.stdin.readline

T = int(input().rstrip())

answers = []
for _ in range(T):
    n = int(input().rstrip())

    stickers = []
    stickers.append(list(map(int, input().rstrip().split(" "))))
    stickers.append(list(map(int, input().rstrip().split(" "))))

    dp = []
    # dp[i][j] = i,j에 위치에 있는 스티커를 떼었을떼 최대 가치
    dp.append([0]*n)
    dp.append([0]*n)

    # 1번쨰 초기화
    dp[0][0] = stickers[0][0]
    dp[1][0] = stickers[1][0]

    if(n == 1):
        answers.append(max(dp[0][0], dp[1][0]))
        continue

    # 2번쨰 초기화
    dp[0][1] = dp[1][0] + stickers[0][1]
    dp[1][1] = dp[0][0] + stickers[1][1]
    if(n == 2):
        answers.append(max(dp[0][1], dp[1][1]))
        continue

    for i in range(2, n):
        # 범위 내면 앞 2번쨰칸을 선택했을 떄까지 고려
        dp[0][i] = max(dp[1][i-1] + stickers[0][i],
                       stickers[0][i] + max(dp[0][i-2], dp[1][i-2]))
        dp[1][i] = max(dp[0][i-1] + stickers[1][i],
                       stickers[1][i]+max(dp[0][i-2], dp[1][i-2]))

    # print()
    # print(dp[0])
    # print(dp[1])
    # print()
    answers.append(max(dp[0][n-1], dp[1][n-1]))

for a in answers:
    print(a)
