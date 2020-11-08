# 스테이지에 도달했으나, 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
# 전체 스테이지 수 N
# 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열 stages
# 실패율이 높은 스테이지부터 내림차순으로 return하라

def solution(n, stages):
    answer = []
    failure_ratio = []
    for i in range(1, n+1):

        # stage i번째를 도전한 사용자들
        warriers = len(list(filter(lambda x: x >= i, stages)))

        if(warriers == 0):
            failure_ratio.append((i, 0))
            continue
        # 도전했으나 실패한 사용자들
        losers = stages.count(i)

        failure_ratio.append((i, losers/warriers))

    answer = list(map(lambda x: x[0], sorted(
        failure_ratio, key=lambda x: (-x[1], x[0])
    )
    ))
    return answer
