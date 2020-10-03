import sys
input = sys.stdin.readline

s = input().rstrip() + "!" # !는 문자열 맨마지막 체크용으로 붙여줌.

tmp = ""
answer = 0
minusAppeared = False # 이전에 -가 한번이라도 나오면 그 뒤 모든 값들 다 뺴면 최소값임. 이거 생각해냈으면 천재
for i in range(len(s)):
  # -거나 +거나 문자열 마지막일때 체크
  if( s[i] == "-" or s[i]=="+" or s[i]=="!"):
    if( not minusAppeared ):
      answer += int(tmp)
      tmp=""
    else:
      answer -= int(tmp)
      tmp=""
    
    if(s[i] == "-"):
      minusAppeared = True
  
  else:
    tmp += s[i]

print(answer)
