function solution(str) {
  let result = [];

  for (let x of str) {
    if (result.indexOf(x) === -1) {
      result.push(x);
    }
  }

  console.log(result);
  return result;
}

const str = ["good", "time", "good", "time", "student"];

solution(str);
