/*Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
*/

function pyramid(balls) {
  let level = 0;
  let ballCount = 0;

  while (ballCount < balls) {
    level++;
    ballCount += level;
  }

  if (ballCount === balls) return level;

  return level - 1;
}

console.log(pyramid(100));
console.log(pyramid(3));
console.log(pyramid(10));
console.log(pyramid(15));
console.log(pyramid(6));
console.log(pyramid(21));
