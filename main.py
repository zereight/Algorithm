import sys
input = sys.stdin.readline

'''
핵심아이디어
ABC
DBA
이면
A: 100 + 1
B: 10 + 10
C: 1
D: 100
가중치를 두어서 가장 높은 알파벳에 9부터 할당한다.
'''

# 입력받기
n = int(input().rstrip())
ss = []
for _ in range(n):
    ss.append(list(input().rstrip()))

# 모든 알파벳에 대해 숫자 0처리
info = dict()
for i in range(26):
    info[chr(ord('A')+i)] = 0

# 가중치 처리
for s in ss:
    d = 10**(len(s)-1)
    for i in range(len(s)):
        info[s[i]] += d
        d = int(d/10)

# 9부터 넣을 리스트
nums = list(range(10))

# 가중치 큰순으로 정렬
info = sorted(info, key=lambda x: -info[x])

# 바꾸기 dict
changer = dict()
for key in info:
    changer[key] = nums.pop()
    if(len(nums) == 0):
        break

# 문자열을 정수로


def stringToInt(s, changer):
    nums = ''
    for _s in s:
        nums += str(changer[_s])

    return int(nums)


# 문자열들 더하기
answer = 0
for s in ss:
    answer += stringToInt(s, changer)

print(answer)
