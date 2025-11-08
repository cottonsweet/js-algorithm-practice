function solution(arr) {
  let result = 0;

  for (let x of arr[0]) {
    if (x === arr[1]) {
      result++;
    }
  }

  console.log(result);
  return result;
}

const arr = ["COMPUTERPROGRAMMING", "R"];
solution(arr);
