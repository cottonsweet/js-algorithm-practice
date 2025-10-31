function solution(day, arr) {
  let result = 0;

  for (let car of arr) {
    if (car % 10 === day) {
      result++;
    }
  }
  console.log(result);
  return result;
}

const arr = [25, 23, 11, 47, 53, 17, 33];
solution(3, arr);
