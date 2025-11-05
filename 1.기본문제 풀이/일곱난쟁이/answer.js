function solution(arr) {
  const result = arr;
  const arrSum = result.reduce((a, b) => a + b);
  let startFlag = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < 9; j++) {
      if (result[i] + result[j] === arrSum - 100) {
        result.splice(j, 1);
        result.splice(i, 1);
        startFlag = false;
        break;
      }
    }
    if (!startFlag) break;
  }
  console.log(result);

  return result;
}

const arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
solution(arr);
