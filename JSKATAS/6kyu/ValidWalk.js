const walk1 = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];
const walk2 = ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"];
const walk3 = ["w"];
const walk4 = ["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"];

function isValidWalk(walk) {
	const letterCount = {};

	for (let i = 0; i < walk.length; i++) {
		const letter = walk[i];
		if (letterCount[letter]) {
			letterCount[letter]++;
		} else {
			letterCount[letter] = 1;
		}
	}

	const northTimes = letterCount.n;
	const southTimes = letterCount.s;
	const eastTimes = letterCount.e;
	const westTimes = letterCount.w;

	console.log("North =>", northTimes);
	console.log("South =>", southTimes);
	console.log("East =>", eastTimes);
	console.log("West =>", westTimes);

	if (walk.length % 2 !== 0) {
		return false;
	} else if (walk.length !== 10) {
		return false;
	} else {
		return "this could be plausible but you must calc first";
	}
}

console.log("Walk1 =>", isValidWalk(walk1));
console.log("Walk2 =>", isValidWalk(walk2));
console.log("Walk3 =>", isValidWalk(walk3));
console.log("Walk4 =>", isValidWalk(walk4));
