const obj1 = [
  7, 9, 11, 2, 62, 100, 33, 25, 66, 999, 40, 50, 57, 89, 88, 15, 13, 12, 5, 10,
];
const obj2 = {
  apple: "red",
  banana: "yellow",
  grape: "purple",
  onion: "white",
  zucchini: "green",
  blueberry: "blue",
  carrot: "orange",
};
const obj3 = { a: "1", b: "2", c: "3", d: "4" };
const obj4 = { a: "1", b: "2", c: "2", d: "4" };
const obj5 = ["1", "2", "3", "4"];

const obj6 = { a: 1, b: 2, c: 3 };
const obj7 = { 1: 4, false: 6 };
const obj8 = {};
const obj9 = {
  Name: "Christian Sheen",
  Age: 35,
  Date: "2026-02-06T14:10:10.936Z",
};

kA1 = ["a", "b", "c"];
vA1 = [1, 2, 3];
kA2 = ["1", 1, false];
vA2 = [4, 5, 6];
kA3 = [];
vA3 = [];
kA4 = ["Name", "Age", "Date"];
vA4 = ["Christian Sheen", 35, new Date()];

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [
  10, 15, 20, 25, 30, 25, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
];
const arr3 = [5, 6, 4, 7, 3, 8, 2, 9, 1, 10];
const arr4 = [
  10, 11, 9, 12, 8, 13, 7, 14, 6, 13, 5, 15, 4, 16, 3, 17, 2, 18, 1, 19, 20,
];

const bString1 = "(){}[]"; // true
const bString2 = "(}"; // false
const bString3 = "[(])"; // false
const bString4 = "([{}])"; // true
const bString5 = "[({})](]"; // false

const flss1 = "aaabusybb";
const flss2 = "morning";
const flss3 = "bbbbbbbbb";
const flss4 = "letmmletmyyletmypeopl3g0goooo";
const flss5 = "rrrrrmmmmmaslkdalskllllqwertyansillllslksdkkakkskkdfffkovsd";

const str1 = "neehS";
const str2 = "naitsirhC";

const n1 = 1234554321; // true
const n2 = 98766789; // true
const n3 = 101; // true
const n4 = 555555; // true
const n5 = 1; // true
const n6 = 1213141551413121; // true
const n7 = 12232210; // false
const n8 = 101010; // false
const n9 = 67776777; // false
const n10 = 987654321; // false
const n11 = 56654774; // false
const n12 = 123456789; // false

// console.log(reverseStr(bString1));
// console.log(reverseStr(bString2));
// console.log(reverseStr(bString3));
// console.log(reverseStr(bString4));
// console.log(reverseStr(bString5));
// console.log(reverseStr(str1));
// console.log(reverseStr(str2));
// console.log(reverseStr(str3));
// console.log(reverseStr(str4));
// console.log(reverseStr(str5));

// console.log(bnrysrch(arr1, 3));
// console.log(bnrysrch(arr2, 90));
// console.log(bnrysrch(arr3, 4));
// console.log(bnrysrch(arr4, 14));

// console.log(twoSum(arr2, 185));
// console.log(twoSum(arr1, 11));
// console.log(twoSum(arr4, 30));
// console.log(twoSum(arr3, 17));

// console.log(arrMergeObj(kA1, vA1));
// console.log(arrMergeObj(kA2, vA2));
// console.log(arrMergeObj(kA3, vA3));
// console.log(arrMergeObj(kA4, vA4));

// console.log(arrMergeObj(kA1, vA1).inversionOfObj());
// console.log(arrMergeObj(kA2, vA2).inversionOfObj());
// console.log(arrMergeObj(kA3, vA3).inversionOfObj());
// console.log(arrMergeObj(kA4, vA4).inversionOfObj());

// console.log(obj1.inversionOfObj());
// console.log(obj2.inversionOfObj());
// console.log(obj3.inversionOfObj());
// console.log(obj4.inversionOfObj());
// console.log(obj5.inversionOfObj());
// console.log(obj6.inversionOfObj());
// console.log(obj7.inversionOfObj());
// console.log(obj8.inversionOfObj());
// console.log(obj9.inversionOfObj());

// console.log(invObj(obj1));
// console.log(invObj(obj2));
// console.log(invObj(obj3));
// console.log(invObj(obj4));
// console.log(invObj(obj5));
// console.log(invObj(obj6));
// console.log(invObj(obj7));
// console.log(invObj(obj8));
// console.log(invObj(obj9));

// console.log("\u001b[1;32mFibNum => 50:\u001b[0m\n", fib(50));
// console.log("\u001b[1;32mFibNum => 1:\u001b[0m\n", fib(1));
// console.log("\u001b[1;32mFibNum => 2:\u001b[0m\n", fib(2));
// console.log("\u001b[1;32mFibNum => 6:\u001b[0m\n", fib(6));
// console.log("\u001b[1;32mFibNum => 10:\u001b[0m\n", fib(10));
// console.log("\u001b[1;32mFibNum => 12:\u001b[0m\n", fib(12));
// console.log("\u001b[1;32mFibNum => 50:\u001b[0m\n", fib(30));

// console.log("\u001b[1;32mFibGen => 1:\u001b[0m\n", fibGen(30));
// console.log("\u001b[1;32mFibGen => 1:\u001b[0m\n", fibGen(1));
// console.log("\u001b[1;32mFibGen => 2:\u001b[0m\n", fibGen(2));
// console.log("\u001b[1;32mFibGen => 6:\u001b[0m\n", fibGen(6));
// console.log("\u001b[1;32mFibGen => 10:\u001b[0m\n", fibGen(10));
// console.log("\u001b[1;32mFibGen => 12:\u001b[0m\n", fibGen(12));

// console.log(flss(flss1));
// console.log(flss(flss2));
// console.log(flss(flss3));
// console.log(flss(flss4));
// console.log(flss(flss5));

// console.log(isValidBraces(bString1));
// console.log(isValidBraces(bString2));
// console.log(isValidBraces(bString3));
// console.log(isValidBraces(bString4));
// console.log(isValidBraces(bString5));

console.log(isPal(n1));
console.log(isPal(n2));
console.log(isPal(n3));
console.log(isPal(n4));
console.log(isPal(n5));
console.log(isPal(n6));
console.log(isPal(n7));
console.log(isPal(n8));
console.log(isPal(n9));
console.log(isPal(n10));
console.log(isPal(n11));
console.log(isPal(n12));
