import sys
input = sys.stdin.readline

coins = [500, 100, 50, 10, 5, 1]

money = 1000-int(input().rstrip())

count = 0

for coin in coins:
    count += money//coin
    money = money % coin

print(count)
