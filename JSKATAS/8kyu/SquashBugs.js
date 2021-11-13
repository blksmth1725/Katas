const string1 = "The quick white fox jumped around the massive dog";
const string2 = "Take me to tinseltown with you";
const string3 = "Sausage chops";
const string4 = "Wind your body and wiggle your belly";
const string5 = "Lets all go on holiday";

const findLongest = (string) =>
  Math.max(...string.split(" ").map((i) => i.length));

const findLongestt = (string) => {
  const split = string.split(" ").map((i) => i.length);
  return Math.max(...split);
};

console.log(findLongest(string1));
console.log(findLongest(string2));
console.log(findLongest(string3));
console.log(findLongest(string4));
console.log(findLongest(string5));

console.log(findLongestt(string1));
console.log(findLongestt(string2));
console.log(findLongestt(string3));
console.log(findLongestt(string4));
console.log(findLongestt(string5));
