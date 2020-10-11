import sys
import heapq
input = sys.stdin.readline

n = int(input().rstrip())

cards = []

# 카드 입력받기
for _ in range(n):
    heapq.heappush(cards, int(input().rstrip()))

answer = 0
while(len(cards) != 0):
    # 제일 작은값 1개 뺀다
    a = heapq.heappop(cards)
    # 다 뺀거면 중단
    if(len(cards) == 0):

        break
    # 2번째꺼 뺀다.
    b = heapq.heappop(cards)

    # 더한것을 큐에 다시 넣는다.
    answer += (a+b)
    heapq.heappush(cards, a+b)

print(answer)
