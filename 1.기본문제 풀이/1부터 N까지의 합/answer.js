function solution(a) {
  let result = 0;
  for (let i = 0; i <= a; i++) {
    result += i;
  }

  console.log(result);
  return result;
}

solution(10);
