import sys
input = sys.stdin.readline

T = int(input().rstrip())

def solve(man):
  
  man = sorted(man, key=lambda x: x[0]) # 서류순위 순으로 정렬
  min_score = man[0][1] # 면접 순위를 기준으로 체크할것임
  count = 0
  for m in man:
    if( m[1] <= min_score ):
      count += 1
      min_score = m[1]
  
  return count
    

answer = []
for _ in range(T):
  n = int(input().rstrip())

  man = []
  for _ in range(n):
    # 동석차 없음, 순위가 낮을 수록 좋은거임
    man.append( list(map(int, input().rstrip().split(" ")) ) )
  
  answer.append( solve(man) )

for a in answer:
  print(a)
