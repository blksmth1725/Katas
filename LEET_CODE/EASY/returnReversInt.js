const reverse = (x) => {
  let conv = String(x).split("");
  for (let i = conv.length; i >= 0; i--) {
    const curr = conv[i];
    if (curr === "0" && i === conv.length - 1) {
      conv.pop();
    }
  }
  const Min = -(2 ** 31);
  const Max = 2 ** 31 - 1;
  if (conv[0] === "-") {
    const negRev = Number(-conv.reverse().slice(0, -1).join(""));
    return negRev < Min ? 0 : negRev;
  } else {
    const regRev = Number(conv.reverse().join(""));
    return regRev > Max ? 0 : regRev;
  }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(901000));
console.log(reverse(101010000));
// console.log(reverse(0));
// console.log(reverse(10));
// console.log(reverse(100));
// console.log(reverse(1000));
// console.log(reverse(10000));
// console.log(reverse(100000));
// console.log(reverse(1000000));
// console.log(reverse(10000000));
// console.log(reverse(100000000));
console.log(reverse(1534236469));
console.log(reverse(1200483642));
