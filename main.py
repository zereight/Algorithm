import sys
input = sys.stdin.readline

n = int(input().rstrip())
req = list(map(int, input().rstrip().split(" ")))
total = int(input().rstrip())

req = sorted(req)


def getTotal(req, x):
    ans = 0
    for r in req:
        if(r <= x):
            ans += r
        else:
            ans += x
    return ans


def binary_search_upper(req, start, end, target):
    while(start <= end):
        mid = (start+end)//2
        # 배정한 예산의 합이 총예산 이하이면 1더 더해서 최대 m을 찾아준다.
        if(getTotal(req, mid) <= target):
            start = mid+1

        else:
            end = mid-1

    return end


answer = binary_search_upper(req, 0, max(req), total)
print(answer)
