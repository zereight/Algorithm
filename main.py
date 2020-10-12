import sys
input = sys.stdin.readline

n = int(input().rstrip())

# 모든 로프를 사용할 필요가 없다.
ropes = []
for _ in range(n):
    ropes.append(int(input().rstrip()))

# 역순정렬
ropes = sorted(ropes, reverse=True)
m = 0
for i in range(n):
    # 1개선택 or 지금까지 로프만 선택
    m = max(m, ropes[i]*(i+1))

print(m)
