function solution(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }

  console.log(result);
  return result;
}

const str = "ksekkset";

solution(str);
