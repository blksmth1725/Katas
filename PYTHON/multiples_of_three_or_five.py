def solution(number):
  if number < 0: 
      return 0
  total = 0
  list = []
  for num in range(number):
    list.append(num)
    if num%3 == 0 or num%5 == 0:
      total += num
  
    print(list)
    print(total)
  return total

solution(6)
solution(3)
solution(5)
solution(15)
solution(-1)
solution(10)
solution(0)