function solution(a, b, c) {
  let result;
  let max;
  let sum = a + b + c;
  const yes = "YES";
  const no = "NO";

  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (max < c) {
    max = c;
  }

  if (sum - max <= max) {
    result = no;
  } else {
    result = yes;
  }

  console.log("세변의 합", sum);
  console.log("제일 큰 수", max);
  console.log("큰수를 제외하고 작은수를 더한 값", sum - max);

  console.log(result);
  return result;
}

solution(13, 33, 17);
