import sys
from collections import deque
input = sys.stdin.readline

n = int(input().rstrip())
k = int(input().rstrip())
apples = []
for _ in range(k):
    x, y = map(int, input().rstrip().split(" "))
    apples.append((x-1, y-1))

L = int(input().rstrip())
info = deque()
for _ in range(L):
    t, direction = input().rstrip().split(" ")
    info.append((int(t), direction))

curr_x, curr_y = 0, 0

heading = 0  # 0:우, 1:하, 2:좌, 3:상

body = deque()


def turn_head(direction):
    global heading
    if(direction == "L"):  # 좌회전
        heading = (heading-1) % 4
    elif(direction == "D"):
        heading = (heading+1) % 4


def go(x, y):
    if(heading == 0):  # 오른쪽
        return (x, y+1)
    elif(heading == 1):  # 하단
        return (x+1, y)
    elif(heading == 2):  # 왼쪽
        return (x, y-1)
    elif(heading == 3):  # 상단
        return (x-1, y)


def isValid(x, y):
    global n, body
    if(x >= 0 and y >= 0 and x < n and y < n):
        if((x, y) not in body):
            return True
    return False


body.append((0, 0))

i = 0
while(1):
    i += 1
    curr_x, curr_y = go(curr_x, curr_y)  # 간다.
    if(not isValid(curr_x, curr_y)):  # 유효하지 않으면 취소
        print(i)
        break
    if((curr_x, curr_y) not in apples):  # 사과 좌표가 아니라면
        body.popleft()  # 몸통1개 뺸다.
    else:  # 사과 좌표라면 사과제거해준다!!!!!
        apples.remove((curr_x, curr_y))
    # 유효했다면 몸통추가
    body.append((curr_x, curr_y))

    if(len(info) != 0):
        if(i == info[0][0]):  # 해당 시간이 되면
            t, direction = info.popleft()
            turn_head(direction)  # 회전
