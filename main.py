import sys
from itertools import combinations, product
input = sys.stdin.readline

L, C = map(int, input().rstrip().split(" "))
s = input().rstrip().split(" ")

moem = []
jaem = []

for _s in s:
    if(_s in ['a', 'e', 'i', 'o', 'u']):
        moem.append(_s)
    else:
        jaem.append(_s)

ans = set()
for i in range(L+1):  # 모음최소 1개부터 시작
    moem_len = i
    jaem_len = L-i

    if(moem_len >= 1 and jaem_len >= 2):
        moem_comb = list(combinations(moem, moem_len))
        jaem_comb = list(combinations(jaem, jaem_len))
        for m in moem_comb:
            for j in jaem_comb:
                ans.add(''.join(sorted(list("".join(m)+"".join(j)))))

ans = sorted(list(ans))
for a in ans:
    print(a)
