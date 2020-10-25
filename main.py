import sys
from itertools import permutations
input = sys.stdin.readline
ining_num = int(input().rstrip())

ining_res = []
for _ in range(ining_num):
    ining_res.append(list(map(int, input().rstrip().split(" "))))


def getScore(ining, i, tmp_ans):
    out_count = 0
    base3, base2, base1 = 0, 0, 0  # list슬라이싱말고 변수 3개로 대입하는 방식으로 표현
    while(out_count < 3):  # 아웃 3번채울때까지 해당이닝 무한반복
        if(ining[order[i]] == 0):  # 아웃이면 체크하고
            out_count += 1
        elif(ining[order[i]] == 1):
            tmp_ans += base3
            base3, base2, base1 = base2, base1, 1
        elif(ining[order[i]] == 2):
            tmp_ans += (base3+base2)
            base3, base2, base1 = base1, 1, 0
        elif(ining[order[i]] == 3):
            tmp_ans += (base3+base2+base1)
            base3, base2, base1 = 1, 0, 0
        elif(ining[order[i]] == 4):
            tmp_ans += (base1+base2+base3 + 1)
            base1, base2, base3 = 0, 0, 0

        i = (i+1) % 9  # 다음 플레이어
    return i, tmp_ans


answer = 0
for order in permutations(range(1, 9), 8):  # 1~8까지 순열
    # if(order[4-1] != 1-1):  # 1번선수가 4번자리에 없으면 다시
    #     continue

    # 모든 순열을 구한뒤 4번째자리가 첫번째 투수인지 체크하는 방법 보다는
    # 1~8까지 배치후에 4번쨰자리에 첫번쨰 투수를 삽입하는 방법 사용
    order = (*order[:3], 0, *order[3:])

    tmp_ans = 0

    i = 0
    for ining in ining_res:
        i, tmp_ans = getScore(ining, i, tmp_ans)

    answer = max(answer, tmp_ans)


print(answer)
# print(ans_l)
