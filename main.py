import sys
input = sys.stdin.readline

n, k = map(int, input().rstrip().split(" "))
board = []
virus_pos_for_type = dict()  # 바이러스 타입별 위치
for _k in range(1, k+1):
    virus_pos_for_type[_k] = []

for i in range(n):
    board.append([*map(int, input().rstrip().split(" "))])
    for idx, v in enumerate(board[i]):
        if(v != 0):
            virus_pos_for_type[v].append((i, idx))  # 바이러스 위치 정보 추가

s, x, y = map(int, input().rstrip().split(" "))

# 상하좌우
direction = ((-1, 0), (1, 0), (0, -1), (0, 1))


def process():
    for _ in range(s):  # s초가 지나갑니다.
        for virus_type in range(1, k+1):
            new_pos = [] # virus_pos_for_type[virus_type]를 새롭게 갱신할 리스트
            for _x, _y in virus_pos_for_type[virus_type]:
                for i in range(4):
                    nx, ny = _x+direction[i][0], _y+direction[i][1]
                    # 유효한 범위인가
                    if(nx >= 0 and ny >= 0 and nx < n and ny < n):
                        # 해당위치에 바이러스가 없는가
                        if(board[nx][ny] == 0):
                            board[nx][ny] = virus_type
                            new_pos.append((nx, ny))
                            if(nx == x-1 and ny == y-1):  # 바이러스가 목적지에 들어감
                                return board[nx][ny]
            virus_pos_for_type[virus_type] = new_pos # 바이러스 종류에 대한 좌표 갱신
    return board[x-1][y-1]


print(process())
