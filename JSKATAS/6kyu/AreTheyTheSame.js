// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the
// "same" elements, with the same multiplicities(the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

//const arr1 = [121, 144, 19, 161, 19, 144, 19, 11];
const arr1 = [121, 144, 19, 161, 19, 144, 19, 11];
const arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const comp = (a1, a2) => {
	if (a1 === null || a2 === null) return false;
	const a1Squared = a1
		.map((item) => item * item)
		.sort((a, b) => a - b)
		.join();
	const a2Squared = a2.sort((a, b) => a - b).join();
	return a1Squared === a2Squared;
};

console.log("comp =>", comp(arr1, arr2));
