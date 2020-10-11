import heapq
import sys
input = sys.stdin.readline

n = int(input().rstrip())
d = dict()
q = []
answer = []
for _ in range(n):
    x = int(input().rstrip())

    if(x != 0):  # 0이 아니면 추가
        try:
            heapq.heappush(d[abs(x)], x)
        except:
            # 각 절대값에 해당하는 것에 또 우선순위큐 적용
            d[abs(x)] = []
            heapq.heappush(d[abs(x)], x)

        # 절대값의 최소값을 추출하기 위힌 우선순위큐
        heapq.heappush(q, abs(x))

    else:  # 0이면 뺸다.
        if(len(q) == 0):  # 비어있으면 0을 넣음
            answer.append(0)
        else:  # 안비어있으면 최소값을 빼고, 절대값 dict에 마지막 원소빼면됨.
            # 그럼 같은 절대값중 가장 작은 원소 빠짐
            m = heapq.heappop(q)
            answer.append(heapq.heappop(d[m]))

for a in answer:
    print(a)
