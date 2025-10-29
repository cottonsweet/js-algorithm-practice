function solution(a) {
  let result = a[0];

  for (let i = 0; i < a.length; i++) {
    if (result > a[i]) {
      result = a[i];
    }
  }

  console.log(result);
  return result;
}

const arr = [5, 3, 7, 11, 2, 15, 17];
solution(arr);
