const fibGen = (count) => {
  let stack = [1, 1];
  for (let i = 2; i < count; i++) {
    stack.push(stack[i - 1] + stack[i - 2]);
  }
  return stack.slice(0, count);
};

console.log(fibGen(10));
console.log(fibGen(6));
console.log(fibGen(8));
console.log(fibGen(15));
// console.log(fibGen(50));
// console.log(fibGen(1));
// console.log(fibGen(2));
// console.log(fibGen(60));
// console.log(fibGen(100));

const tenFib = fibGen(10);

const fortyEigthFibNum = fibGen(48)[fibGen(48).length - 1];
console.log(`the 48th be => ${fortyEigthFibNum}`);

const turnToObj = (fibArr) => {
  let fibObj = {};
  for (let i = 0; i < fibArr.length; i++) {
    const key = String(fibArr[i]);
    if (!(key in fibObj)) {
      fibObj[i] = key;
    }
  }
  return fibObj;
};

console.log(turnToObj(tenFib));
