const returnAddAll = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b);
	return ((max - min + 1) * (min + max)) / 2;
};

returnAddAll(-4, 20);
returnAddAll(30, -20);
