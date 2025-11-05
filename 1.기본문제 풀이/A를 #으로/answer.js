function solution(str) {
  const splitStr = str.split("");
  let result;

  result = splitStr.map((value, _) => (value === "A" ? "#" : value)).join("");

  console.log(reuslt);
  return result;
}

solution("BANANA");
