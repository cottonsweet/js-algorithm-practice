function solution(a) {
  let oddArr = [];
  let oddSum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
      oddArr = [...oddArr, a[i]];
      oddSum += a[i];
    }
  }

  console.log(oddSum, Math.min(...oddArr));
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
