const s1 = "1112";
const s2 = "221";
const s3 = "1";
const s4 = "11";

const lonEvenNum = (s) => {
  while (s.length && s.charAt(s.length - 1) === "1") {
    s = s.slice(0, -1);
  }
  return s;
};

console.log(lonEvenNum(s1));
console.log(lonEvenNum(s2));
console.log(lonEvenNum(s3));
console.log(lonEvenNum(s4));
