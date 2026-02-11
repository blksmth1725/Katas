const a3 = [2, 4, 6, 8, 7];
const a4 = [2, 4, 6, 8, 9];
const a5 = [9, 9];
const a6 = [9, 9, 9];

const arrPlusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(arrPlusOne(a3));
console.log(arrPlusOne(a4));
console.log(arrPlusOne(a5));
console.log(arrPlusOne(a6));
