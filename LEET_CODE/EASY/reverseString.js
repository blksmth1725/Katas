console.log(reverseStr(bString1));
console.log(reverseStr(bString2));
console.log(reverseStr(bString3));
console.log(reverseStr(bString4));
console.log(reverseStr(bString5));
console.log(reverseStr(str1));
console.log(reverseStr(str2));
console.log(reverseStr(str3));
console.log(reverseStr(str4));
console.log(reverseStr(str5));

const reverseStr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const bString1 = "(){}[]"; // true
const bString2 = "(}"; // false
const bString3 = "[(])"; // false
const bString4 = "([{}])"; // true
const bString5 = "[({})](]"; // false

const str1 = "aaabusybb";
const str2 = "morning";
const str3 = "bbbbbbbbb";
const str4 = "neehS";
const str5 = "naitsirhC";
