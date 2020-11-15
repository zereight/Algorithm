import sys
input = sys.stdin.readline

n = int(input().rstrip())

info = []

for i in range(n):
    age, name = input().rstrip().split(" ")
    age = int(age)

    info.append((age, i, name))

info = sorted(info, key=lambda x: (x[0], x[1]))

for i in info:
    print(F"{i[0]} {i[2]}")
