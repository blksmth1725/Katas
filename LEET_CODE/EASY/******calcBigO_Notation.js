const calcN = (n, pwr) => {
  return Math.pow(n, pwr);
};

console.log("10^2 => requires a O(n)\n", calcN(10, 2));
console.log("10^3 => requires a O(n)\n", calcN(10, 3));
console.log("10^4 => requires a O(nLogn)\n", calcN(10, 4));
console.log("10^5 => requires a O(nLogn)\n", calcN(10, 5));
console.log("10^6 => requires a O(nLogn)\n", calcN(10, 6));
console.log("10^7 => requires a O(Logn)\n", calcN(10, 7));
console.log("10^8 => requires a O(1)\n", calcN(10, 8));
