//Complete the method that takes a boolean value and return a "Yes" string for true, or a //"No" string for false.

function Check(bool) {
  return bool === true ? "Yes" : "No";
}

console.log(Check(true));
console.log(Check(false));
console.log(Check(false));
console.log(Check(true));
console.log(Check(true));
console.log(Check(false));
console.log(Check(true));

module.exports = Check;
