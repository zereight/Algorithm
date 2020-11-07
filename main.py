import sys
input = sys.stdin.readline

n = int(input().rstrip())
houses = sorted([*map(int, input().rstrip().split(" "))])

print(houses[(n-1)//2])
