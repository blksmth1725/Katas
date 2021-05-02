function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(487));
console.log(isPowerOfTwo(144));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(350));
