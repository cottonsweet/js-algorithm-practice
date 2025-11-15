function solution(arr) {
  let result = 1;
  let higherHeight = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > higherHeight) {
      higherHeight = arr[i];
      result++;
    }
  }

  console.log(result);
  return result;
}

const arr = [
  161, 135, 148, 140, 145, 150, 150, 153, 153, 153, 163, 149, 149, 162, 162,
  160,
];
solution(arr);
