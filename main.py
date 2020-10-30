import sys
input = sys.stdin.readline

t = int(input().rstrip())
for _ in range(t):
    print((" ").join(
        list(map(lambda x: x[::-1], input().rstrip().split(" ")))))
