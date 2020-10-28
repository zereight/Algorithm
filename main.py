import sys
from collections import deque
input = sys.stdin.readline

n = int(input().rstrip())

cards = deque()
for i in range(1, n+1):
    cards.append(i)

while(len(cards) != 1):
    cards.popleft()  # 제일 위에 있는 카드를 버린다.
    # 제일 위에 있는 카드를 제일 아래로 옮긴다.
    cards.append(cards.popleft())

print(cards[0])
