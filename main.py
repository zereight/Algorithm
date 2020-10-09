import sys
import heapq
input = sys.stdin.readline

n = int(input().rstrip())
s = input().rstrip().split(" ")


def solve(findMin):
    global n, s

    # 간선 저장
    graph = dict()
    for i in range(n+1):
        graph[i] = []

    # inDegree 저장
    # inDegree[2] 는 ?->2인 간선의 개수를 뜻함
    inDegree = [0] * (n+1)

    if(findMin):
        '''
        최소값 찾을떄는 0부터9 까지 차례대로 pop하며배치,
        A<B 일때는 0<1 이렇게 넣어야 하므로 A->B간선
        A>B 일때는 1>0 이렇게 넣어야 하므로 A<-B간선
        '''

        for i, _s in enumerate(s):
            if(_s == "<"):
                graph[i].append(i+1)
                inDegree[i+1] += 1
            else:
                graph[i+1].append(i)
                inDegree[i] += 1
    else:
        '''
        최대값 찾을떄는 9부터0 까지 차례대로 pop하며배치,
        A<B 일때는 8<9 이렇게 넣어야 하므로 A<-B간선
        A>B 일때는 9>8 이렇게 넣어야 하므로 A->B간선
        '''

        for i, _s in enumerate(s):
            if(_s == "<"):
                graph[i+1].append(i)
                inDegree[i] += 1
            else:
                graph[i].append(i+1)
                inDegree[i+1] += 1

    # print(inDegree)
    # print(graph)
    q = []

    for i in range(n+1):
        # 0인것부터 왼쪽큐에넣는다
        if(inDegree[i] == 0):
            heapq.heappush(q, i)
            # 해당 indegree의 차수를 낮추어 다음 비교에 포함안되도록 한다.
            inDegree[i] -= 1

    # 최소값구하려면 0~9넣어야하므로 거꾸로 pop하기위해서 뒤집기
    arr = sorted(range(10), reverse=findMin)

    answer = [-1] * (n+1)
    while(len(q) != 0):

        # 오는 간선이 없는 노드를 1개 뽑는다.
        i = heapq.heappop(q)

        # 적절한 위치에 숫자를 순서대로 넣는다
        answer[i] = arr.pop()

        # 노드 사라졌으므로 i의 목적지에 해당하는 간선을 1개씩 없애준다
        for g in graph[i]:
            inDegree[g] -= 1

        for j in range(n+1):
            # 0인것부터 왼쪽큐에넣는다
            if(inDegree[j] == 0):

                heapq.heappush(q, j)
                # 해당 indegree의 차수를 낮추어 다음 비교에 포함안되도록 한다.
                inDegree[j] -= 1

    print("".join(map(str, answer)))


solve(False)
solve(True)
