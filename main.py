import sys
input = sys.stdin.readline

n, c = map(int, input().rstrip().split(" "))
houses = []
for _ in range(n):
    houses.append(int(input().rstrip()))

houses = sorted(houses)

start = houses[1] - houses[0]
end = houses[-1] - houses[0]
res = 0

while(start <= end):
    mid = (start+end)//2
    value = houses[0]
    count = 1

    for i in range(1, n):
        if(houses[i] >= value + mid):
            value = houses[i]
            count += 1
    if(count >= c):
        start = mid+1
        res = mid
    else:
        end = mid-1

print(res)
