import sys
from collections import deque
input = sys.stdin.readline

n = int(input().rstrip())

nums = []
for _ in range(n):
    nums.append(int(input().rstrip()))

'''
핵심 아이디어
큰값부터 내려오면서
양수는 양수랑 곱
음수는 음수끼리 곱
1은 무조건 더하기
0은 음수랑 곱해서 음수 없애버리기
그래도 남는 수들은 더해버리기
'''

positives = []  # 1은 빼
negatives = []
zeros = []
ones = []

for _n in nums:
    if(_n < 0):
        negatives.append(_n)
    elif(_n > 0):
        if(_n != 1):
            positives.append(_n)
        else:
            ones.append(_n)
    else:
        zeros.append(_n)

negatives = deque(sorted(negatives))
positives = deque(sorted(positives, reverse=True))


# 1 처리

answer = sum(ones)  # 1은 더하는게 이득

# 양수처리
if(len(positives) == 1):  # 길이가 1
    answer += positives[0]
elif(len(positives) > 1):  # 길이가 1초과, 길이 0일떄는 그냥 무시
    for i in range(0, len(positives)-1, 2):  # 각각 곱해서 ㄱ
        answer += (positives[i] * positives[i+1])
    if(len(positives) % 2 != 0):  # 양수개수 홀수였으면 마지막 1개 남았을 것임
        answer += positives[-1]

# 음수처리
if(len(negatives) > 1):  # 길이가 1초과
    for i in range(0, len(negatives)-1, 2):  # 각각 곱해서 ㄱ
        answer += (negatives[i] * negatives[i+1])
    if(len(negatives) % 2 != 0):  # 음수개수 홀수였으면 마지막 1개 남았을 것임
        if(len(zeros) > 0):  # 마지막남은 음수 0으로 없앨 수 있나?, 0은 1개쓰고 다 더한셈치면됨
            pass  # 걍 놔두면됨
        else:  # 0이 없어? 그럼 음수 더해야지..
            answer += negatives[-1]
elif(len(negatives) == 1):  # 음수 길이가 1이라고?
    if(len(zeros) > 0):  # 마지막남은 음수 0으로 없앨 수 있나?, 0은 1개쓰고 다 더한셈치면됨
        pass  # 걍 놔두면됨
    else:  # 0이 없어? 그럼 음수 더해야지
        answer += negatives[-1]

# print(positives)
# print(negatives)
# print(ones)
# print(zeros)

print(answer)
