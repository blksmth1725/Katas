// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e. => friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

const arr1 = [
  "ryan",
  "jerry",
  "christian",
  "Jonathan",
  "bonifacio",
  "ted",
];
const arr2 = ["ryantron", "jerry", "chris", "Jona", "boni", "ted"];
const arr3 = [
  "Jake",
  "LOGAN",
  "christopher",
  "Paul",
  "Theodore",
  "theo",
  "chloe",
  "gina",
  "DRACO",
];

const friendOrFoe = (arr) => {
  return arr.filter((friend) => {
    return friend.length <= 4;
  });
};

console.log(friendOrFoe(arr1));
console.log(friendOrFoe(arr2));
console.log(friendOrFoe(arr3));
