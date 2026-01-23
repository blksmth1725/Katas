function getCount(str) {
	let count = 0;
	const vowels = ["a", "e", "i", "o", "u"];
	str.split("").map((el) => {
		vowels.includes(el) ? (count += 1) : null;
	});

	return count;
}

console.log(getCount("abracadabra"));
