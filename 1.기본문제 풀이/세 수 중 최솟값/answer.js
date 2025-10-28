function solution(a, b, c) {
  let result;
  if (a > b && a > c) {
    result = a;
  } else if (b > a && b > c) {
    result = b;
  } else {
    result = c;
  }
  console.log(result);
  return result;
}

solution(99, 101, 222);
