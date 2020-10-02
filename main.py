import sys
input = sys.stdin.readline

n,k = map(int, input().rstrip().split(" "))

coins = []
for _ in range(n):
  coins.append( int(input().rstrip()) )

cursor = n-1
answer = 0
while(k!=0):
  answer += k//coins[cursor]
  k -= coins[cursor] * (k//coins[cursor])
  cursor-=1

print(answer)
