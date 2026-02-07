function* factorial(n) {
  if (n === 0) {
    yield 1;
    return;
  }
  let i = 1;
  let fact = 1;

  while (i <= n) {
    fact *= i;
    yield fact;
    i++;
  }
}

// const num = 20;
// const factory = factorial(num);

// for (let i = 0; i < num; i++) {
//   console.log(factory.next().value);
// }
