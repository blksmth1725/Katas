var fibGenerator = function* () {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

// const num = 50;
// const fib = fibGenerator();

// for (let i = 0; i < num; i++) {
//   console.log(fib.next().value);
// }
