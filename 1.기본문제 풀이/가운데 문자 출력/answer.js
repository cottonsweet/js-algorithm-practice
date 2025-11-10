function solution(str) {
  let result;
  let oddEvenValidate = str.length % 2 === 0 ? true : false;

  for (let i = 0; i < str.length; i++) {
    if (!oddEvenValidate) {
      const oddIndex = Math.ceil(str.length / 2);
      result = str[oddIndex - 1];
    } else {
      const evenIndex = str.length / 2;
      result = str[evenIndex - 1];
      result += str[evenIndex];
    }
  }

  console.log(result);
  return result;
}

const str = "stud";

solution(str);
