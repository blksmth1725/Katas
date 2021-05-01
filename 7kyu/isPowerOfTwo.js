function isPowerOfTwo(n) {
  //.. should return true or false ..
  const verification = n % 2;
  if (n === 1) {
    return "true";
  } else if (n === 0) {
    return "false";
  } else {
    return verification === 0 ? true : false;
  }
}

console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(487));
console.log(isPowerOfTwo(200));
console.log(isPowerOfTwo(333));
console.log(isPowerOfTwo(350));
