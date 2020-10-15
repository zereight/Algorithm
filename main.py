import sys
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))
cards = list(map(int, input().rstrip().split(" ")))

print(
    sum(
        sorted(
            filter(lambda x: sum(x) <= m, combinations(cards, 3)),
            key=lambda x: (abs(sum(x)-m), sum(x)-m)
        )[0]
    )
)
