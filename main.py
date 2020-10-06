import sys
input = sys.stdin.readline


def get_root_nodes(parents, x):

    if(parents[x] != x):
        parents[x] = get_root_nodes(parents, parents[x])
    return parents[x]


def union(parents, a, b):
    a = get_root_nodes(parents, a)
    b = get_root_nodes(parents, b)
    if(a < b):
        parents[b] = a
    else:
        parents[a] = b


answers = []
while(1):
    house_len, street_len = map(int, input().rstrip().split(" "))
    if(house_len == 0 and street_len == 0):
        break
    street_infos = []
    total = 0
    for _ in range(street_len):
        x, y, z = map(int, input().rstrip().split(" "))
        total += z
        street_infos.append((x, y, z))
        street_infos.append((y, x, z))

    parents = [0] * (house_len)
    for i in range(house_len):
        parents[i] = i

    street_infos = sorted(street_infos, key=lambda x: x[2])
    answer = 0
    for edge in street_infos:
        x, y, z = edge

        if(get_root_nodes(parents, x) != get_root_nodes(parents, y)):
            union(parents, x, y)
            answer += z
    answers.append(total-answer)

for a in answers:
    print(a)
