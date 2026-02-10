const createCounter = (init) => {
  let count = init;
  const increment = () => {
    return (count += 1);
  };
  const decrement = () => {
    return (count -= 1);
  };
  const reset = () => {
    return (count = init);
  };

  return { increment, decrement, reset };
};

const counter = createCounter(5);
// console.log(counter);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());
