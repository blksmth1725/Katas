const n1 = 123454321;
const n2 = 12232210;
const n3 = 101010;
const n4 = 1;
const n5 = 0;
const n6 = 555555;
const n7 = 67776777;
const n8 = 987654321;
const n9 = 98766789;
const n10 = 56654774;

const isNumPalindrome = (n) => {
  const sn = Number(String(n).split("").reverse().join(""));
  return sn === n;
};

console.log(isNumPalindrome(n1));
console.log(isNumPalindrome(n2));
console.log(isNumPalindrome(n3));
console.log(isNumPalindrome(n4));
console.log(isNumPalindrome(n5));
console.log(isNumPalindrome(n6));
console.log(isNumPalindrome(n7));
console.log(isNumPalindrome(n8));
console.log(isNumPalindrome(n9));
console.log(isNumPalindrome(n10));
