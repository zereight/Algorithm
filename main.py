import sys
input = sys.stdin.readline

k, n = map(int, input().rstrip().split(" "))

lans = []
for _ in range(k):
    lans.append(int(input().rstrip()))

lans = sorted(lans)


def count_lans(lans, x):
    count = 0
    for l in lans:
        count += l//x
    return count


def binary_search_custom(arr, start, end, target):
    res = 0
    while(start <= end):
        mid = (start+end)//2

        lan_count = count_lans(arr, mid)
        if(lan_count >= target):
            res = mid
            start = mid+1
        else:
            end = mid-1
    return res


start = 1
end = max(lans)
print(binary_search_custom(lans, start, end, n))
