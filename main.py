from collections import deque

m,n,k=map(int,input().split())
a=[[0]*n for i in range(m)]

dx=[-1, 0, 1, 0]
dy=[0, 1, 0, -1]

l=[]

for i in range(k):
    x1, y1, x2, y2=map(int,input().split())

    for j in range(x1,x2):
        for k in range(y1,y2):
            a[k][j]=1
            
def bfs(s1,s2):
    de=deque()
    de.append([s1,s2])
    a[s1][s2]=1
    c=1

    while de:
        x,y=de.popleft()

        for i in range(4):
            nx= x + dx[i]
            ny= y + dy[i]

            if 0 <= nx < m and 0 <= ny < n:
                if a[nx][ny] == 0:
                    
                    a[nx][ny] = 1
                    c += 1
                    de.append([nx,ny])
    l.append(c)

for i in range(m):
    for j in range(n):
        if a[i][j] == 0:
            bfs(i,j)

print(len(l))
l.sort()
for i in l:
    print(i,end=' ')
