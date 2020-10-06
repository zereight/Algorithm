import sys
input = sys.stdin.readline

n = int(input().rstrip())
have = list(map(int, input().rstrip().split(" ")))

m = int(input().rstrip())
target_num = list(map(int, input().rstrip().split(" ")))

# 이진 탐색을 위한 정렬
have = sorted(have)


def binary_search(arr, start, end, x):
    while(start <= end):
        mid = (start+end)//2
        if(arr[mid] == x):
            return True
        else:
            if(arr[mid] > x):
                end = mid-1
            else:
                start = mid+1
    return False


answers = []
for t in target_num:
    if(binary_search(have, 0, n-1, t) == True):
        answers.append(1)
    else:
        answers.append(0)

print(" ".join(map(str, answers)))
