const taxeRate = 0.08;
const bankBalance = 3756.29;
const threshold = bankBalance * 0.15;
const phonePrice = 89.99;
const accessoryPrice = 9.99;
let amount = 0;

const calculateTax = (amount) => {
  return amount * taxeRate;
};

const formatAmount = (amount) => {
  return "$" + amount.toFixed(2);
};

while (amount < threshold) {
  amount = amount + phonePrice;

  if (amount < bankBalance) {
    amount = amount + accessoryPrice;
  }
}

amount = amount + calculateTax(amount);

console.log("Your purchase:" + formatAmount(amount));

const remainingBalance = () => {
  return bankBalance - amount;
};

amount < bankBalance
  ? console.log(
      `Nice buys, you have ${remainingBalance(amount)}, left to spend`,
    )
  : console.log("Sorry thats too much stuff");
