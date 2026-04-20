/*
Given a string, you need to return a new string where every letter is shifted to its right by one place in alphabetical order. 
The last letters z and Z should be replaced with the first ones: a and A, respectively. 
If the character isn't a letter, it should stay the same.

It is not allowed to use string built-in methods here such as charCodeAt() and fromCharCode().

For example, given the string "abc123XYz!", the function should return "bcd123YZa!".
*/

const shiftLetters = (s) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return s
    .split("")
    .map((char) => {
      if (lower.includes(char)) {
        return lower[(lower.indexOf(char) + 1) % 26];
      } else if (upper.includes(char)) {
        return upper[(upper.indexOf(char) + 1) % 26];
      }
      return char;
    })
    .join("");
};

function solution(s) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let shifted = char;

    for (let j = 0; j < 26; j++) {
      if (char === lower[j]) {
        shifted = lower[(j + 1) % 26];
        break;
      } else if (char === upper[j]) {
        shifted = upper[(j + 1) % 26];
        break;
      }
    }

    result += shifted;
  }

  return result;
}

console.log(shiftLetters("abc123XYz!"));
console.log(shiftLetters("Hello"));
console.log(shiftLetters("zZaA"));
console.log(shiftLetters("123!"));

console.log(solution("abc123XYz!"));
console.log(solution("Hello"));
console.log(solution("zZaA"));
console.log(solution("123!"));
