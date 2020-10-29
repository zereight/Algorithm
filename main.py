import sys
from collections import deque
input = sys.stdin.readline

q = deque()
s = 0

n = int(input().rstrip())

for _ in range(n):
    order = input().rstrip().split(" ")
    if(len(order) == 2):
        # 무조건 push
        q.append(order[1])
        s += 1
    else:
        if(order[0] == "front"):
            if(s == 0):
                print(-1)
            else:
                print(q[0])
        elif(order[0] == "back"):
            if(s == 0):
                print(-1)
            else:
                print(q[-1])
        elif(order[0] == "empty"):
            if(s):
                print(0)
            else:
                print(1)
        elif(order[0] == "size"):
            print(s)
        elif(order[0] == "pop"):
            if(s == 0):
                print(-1)
            else:
                s -= 1
                print(q.popleft())
    # print(q)
