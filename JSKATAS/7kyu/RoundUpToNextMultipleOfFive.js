//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n) {
	return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(29));
console.log(roundToNext5(28));
console.log(roundToNext5(22));
console.log(roundToNext5(17));
console.log(roundToNext5(15));
console.log(roundToNext5(8));
console.log(roundToNext5(7));
console.log(roundToNext5(6));
console.log(roundToNext5(5));
console.log(roundToNext5(4));
console.log(roundToNext5(3));
console.log(roundToNext5(2));
console.log(roundToNext5(1));
console.log(roundToNext5(0));
console.log(roundToNext5(-1));
console.log(roundToNext5(-2));
console.log(roundToNext5(-5));
console.log(roundToNext5(-7));
console.log(roundToNext5(-36));
console.log(roundToNext5(-45));
console.log(roundToNext5(-134));
