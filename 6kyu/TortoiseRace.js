/* Two tortoises named A and B must run a race.A starts with an average speed of 720 feet per hour.Young B knows she runs faster than A, and furthermore has not finished her cabbage.

    When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

    More generally: given two speeds v1(A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g(integer > 0) how long will it take B to catch A ?

        The result will be an array[hour, min, sec] which is the time needed in hours, minutes and seconds(round down to the nearest second) or a string in some languages.

    If v1 >= v2 then return nil, nothing, null, None or { -1, -1, -1 } for C++, C, Go, Nim, Pascal, [-1, -1, -1] for Perl, [] for Kotlin or "-1 -1 -1".
*/

const r1 = [80, 91, 37];
const r2 = [150, 220, 60];
const r3 = [720, 850, 70];
const r4 = [10, 11, 10];
const r5 = [500, 1000, 100];
const r6 = [300, 400, 100];
const r7 = [500, 400, 100];
const r8 = [100, 110, 1000];

const race = (v1, v2, g) => {
  if (v1 >= v2) {
    return null;
  }

  const leftSide = v2 - v1;
  const baseTime = g / leftSide;
  const timeHours = Math.floor(g / leftSide);
  const timeMins = baseTime.toString().split(".").pop().join();

  console.log([timeHours, timeMins]);
};

console.log(race(...r1));
console.log(race(...r2));
console.log(race(...r3));
console.log(race(...r4));
console.log(race(...r5));
console.log(race(...r6));
console.log(race(...r7));
console.log(race(...r8));
