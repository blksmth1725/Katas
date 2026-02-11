const binAdd = (a, b) => {
  const decA = parseInt(a, 2);
  const decB = parseInt(b, 2);
  const decT = decA + decB;

  return decT.toString(2);
};

const ridiculousA =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const ridiculousB =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(binAdd("11", "1"));
console.log(binAdd("1010", "1011"));
console.log(binAdd(ridiculousA, ridiculousB));

const bigIntBinAdd = (a, b) => {
  const sum = BigInt("0b" + a) + BigInt("0b" + b);
  return sum.toString(2);
};

console.log(bigIntBinAdd("11", "1"));
console.log(bigIntBinAdd("1010", "1011"));
console.log(bigIntBinAdd(ridiculousA, ridiculousB));
