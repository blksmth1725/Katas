const bString1 = "(){}[]"; // true
const bString2 = "(}"; // false
const bString3 = "[(])"; // false
const bString4 = "([{}])"; // true
const bString5 = "[({})](]"; // false

const validB = (braces) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of braces) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (stack.pop() !== pairs[char]) {
      return false;
    }
  }
  return stack.length === 0;
};

// console.log("\u001b[1;32mbString 1:\u001b[0m\n", validB(bString1));
// console.log("\u001b[1;32mbString 2:\u001b[0m\n", validB(bString2));
// console.log("\u001b[1;32mbString 3:\u001b[0m\n", validB(bString3));
// console.log("\u001b[1;32mbString 4:\u001b[0m\n", validB(bString4));
console.log("\u001b[1;32mbString 5:\u001b[0m\n", validB(bString5));
//console.log("\u001b[1;32mbString 5:\u001b[0m\n", validBraces(bString5));
