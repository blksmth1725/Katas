// Create a function that returns the next natural sequence of traffic light stops
// For example =>
// Functuion takes in "green" as an argument then it should return "yellow"
// While the same function taking in "red" as an argument should return "green"

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}

console.log(updateLight("green"));
console.log(updateLight("red"));
console.log(updateLight("yellow"));
