function solution(str) {
  let result = 0;

  for (let x of str) {
    if (x === x.toUpperCase()) {
      result++;
    }
  }

  console.log(result);
  return result;
}

const strVariable = "KoreaTimeGood";
solution(strVariable);
