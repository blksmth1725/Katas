//   Given an array of positive integers representing the values of coins in your
//   possession, write a function that returns the minimum amount of change (the
//   minimum sum of money) that you

const coins1 = [5, 7, 1, 1, 2, 3, 22];
const coins2 = [5, 6, 1, 1, 2, 3, 43];
const coins3 = [109, 2000, 8765, 19, 18, 17, 16, 18, 1, 1, 2, 4];
const coins4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const nonConstructableChange = (coins) => {
  const sortedCoins = coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;

  for (const coin of sortedCoins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
};

console.log(nonConstructableChange(coins1));
console.log(nonConstructableChange(coins2));
console.log(nonConstructableChange(coins3));
console.log(nonConstructableChange(coins4));
