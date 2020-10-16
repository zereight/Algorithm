import sys
import copy
input = sys.stdin.readline

s = list(map(int, list(input().rstrip())))

# 0->1뒤집기
count1 = 0
i = 0
complete_0to1 = False
temp1 = -1
# 1->0뒤집기
count2 = 0
j = 0
complete_1to0 = False
temp2 = -1

for i, _s in enumerate(s):  # 최대 100만미만이므로 한큐에 해결하는게 낫다.
    # print(temp1, temp2)
    if(_s == 0):  # 0이면
        if(temp1 == -1):  # 0->1 시작지점마킹
            temp1 = i

        if(temp2 != -1):  # 1->0 마킹한거 초기화 하고 카운트 +1
            count2 += 1
            temp2 = -1

    else:  # 1이면
        if(temp1 != -1):  # 0->1 마킹한거 초기화 하고 카운트 +1
            count1 += 1
            temp1 = -1

        if(temp2 == -1):  # 1->0 시작지점 마킹
            temp2 = i

# 남은 숫자에 대해 마킹해제 + 카운트
if(temp1 != -1):
    count1 += 1
    temp1 = -1
if(temp2 != -1):
    count2 += 1
    temp2 = -1

print(min(count1, count2))
