function solution(str) {
  let result = "";

  for (let x of str) {
    if (x === x.toUpperCase()) {
      result += x.toLowerCase();
    } else {
      result += x.toUpperCase();
    }
  }

  console.log(result);
  return result;
}

const strVariable = "KoreaTimeGood";
solution(strVariable);
