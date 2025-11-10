function solution(type, arr) {
  let result = "";

  for (let i = 0; i < type; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }

  console.log(result);
  return result;
}

const arr = ["teacher", "time", "student", "beautiful", "good"];
solution(5, arr);
