import sys
input = sys.stdin.readline

n = list(map(int, input().rstrip()))
length = len(n)
if(sum(n[:int(length/2)]) == sum(n[int(length/2):])):
    print("LUCKY")
else:
    print("READY")
