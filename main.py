import sys

input = sys.stdin.readline

def dfs(x, y, shape):
    global ans
    if x == n-1 and y == n-1:
        ans += 1
        return

    if shape == 0 or shape == 2:
        if y + 1 < n:
            if a[x][y+1] == 0:
                dfs(x, y+1, 0)
    if shape == 1 or shape == 2:
        if x + 1 < n:
            if a[x+1][y] == 0:
                dfs(x+1, y, 1)
    if shape == 0 or shape == 1 or shape == 2:
        if x + 1 < n and y + 1 < n:
            if a[x+1][y] == 0 and a[x][y+1] == 0 and a[x+1][y+1] == 0:
                dfs(x+1, y+1, 2)


n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
ans = 0
dfs(0, 1, 0)
print(ans)
