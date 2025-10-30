function solution(type, a) {
  let result = "";
  if (type === "최댓값") {
    result = Math.max(...a);
  } else {
    result = Math.min(...a);
  }

  console.log(result);
  return result;
}

const arr = [5, 3, 7, 11, 2, 15, 20];
solution("최댓값", arr);
