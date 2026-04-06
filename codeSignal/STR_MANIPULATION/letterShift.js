/*
Given a string, you need to return a new string where every letter is shifted to its right by one place in alphabetical order. 
The last letters z and Z should be replaced with the first ones: a and A, respectively. 
If the character isn't a letter, it should stay the same.

It is not allowed to use string built-in methods here such as charCodeAt() and fromCharCode().

For example, given the string "abc123XYz!", the function should return "bcd123YZa!".
*/

const shiftLetters = (str) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return str.replace(/[a-zA-Z]/g, (char) => {
    if (/[a-z]/.test(char)) {
      const index = lower.indexOf(char);
      return lower[(index + 1) % 26];
    } else {
      const index = upper.indexOf(char);
      return upper[(index + 1) % 26];
    }
  });
};

console.log(shiftLetters("abc123XYz!"));
console.log(shiftLetters("Hello"));
console.log(shiftLetters("zZaA"));
console.log(shiftLetters("123!"));
