import heapq


def solution(food_times, k):
    answer = 0
    foods = []

    if(sum(food_times) <= k):
        return -1

    for i, f in enumerate(food_times):  # (음식개수, 순서)로 저장
        heapq.heappush(foods, (f, i+1))

    total_time = 0
    curr_food = -1
    prev_food = 0
    length = len(food_times)
    while(1):
        curr_food, curr_index = heapq.heappop(foods)  # 가장 작은 음식개수를 가진 음식 추출

        curr_food -= prev_food  # 이전에 먹은 음식 개수만큼 뺴줌. 같은 음식개수면 자동으로 0

        if((total_time + curr_food*length) > k):  # 다음 음식까지 다먹으면 k초 이상되버림
            curr_food += prev_food
            foods.append((curr_food, curr_index))
            break

        total_time += curr_food*length  # 남은 개수 * 남은 음식길이
        length -= 1  # 음식 1개 끝냈으므로 1개 줄임
        prev_food = curr_food + prev_food  # 다시 원상복귀

    answer = sorted(foods, key=lambda x: x[1])[(k-total_time) % length][1]

    return answer


#print(solution([3, 1, 2], 5))
