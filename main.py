import sys
input = sys.stdin.readline

answer = 0

n = int(input().rstrip())
A = sorted([*map(int, input().rstrip().split(" "))], reverse=True)
B = sorted([*map(int, input().rstrip().split(" "))])

for i in range(n):
    answer += A[i]*B[i]

print(answer)
