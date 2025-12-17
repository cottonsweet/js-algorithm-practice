function solution(a, b) {
  let result = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      result += `${i + 1}회차 무승부: D\n`;
    } else if (a[i] === 1 && b[i] === 3) {
      result += `${i + 1}회차 결과 승리: A\n`;
    } else if (a[i] === 2 && b[i] === 1) {
      result += `${i + 1}회차 결과 승리: A\n`;
    } else if (a[i] === 3 && b[i] === 2) {
      result += `${i + 1}회차 결과 승리: A\n`;
    } else {
      result += `${i + 1}회차 결과 승리: B\n`;
    }
  }

  console.log(result);
  return result;
}

const a = [2, 3, 3, 1, 3];

const b = [1, 1, 2, 2, 3];
solution(a, b);
