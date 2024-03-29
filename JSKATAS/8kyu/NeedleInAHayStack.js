var haystack_1 = [
	"3",
	"123124234",
	undefined,
	"needle",
	"world",
	"hay",
	2,
	"3",
	true,
	false,
];
var haystack_2 = [
	"283497238987234",
	"a dog",
	"a cat",
	"some random junk",
	"a piece of hay",
	"needle",
	"something somebody lost a while ago",
];
var haystack_3 = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	8,
	7,
	5,
	4,
	3,
	4,
	5,
	6,
	67,
	5,
	5,
	3,
	3,
	4,
	2,
	34,
	234,
	23,
	4,
	234,
	324,
	324,
	"needle",
	1,
	2,
	3,
	4,
	5,
	5,
	6,
	5,
	4,
	32,
	3,
	45,
	54,
];

const findNeedle = (haystack) => {
	const target = "needle";
	for (i = 0; i < haystack.length; i++) {
		if (haystack[i] === target) {
			return `found the needle at position ${i}`;
		}
	}
};

const findNeedle2 = (haystack) => {
	return `found the needle at position ${haystack.indexOf("needle")}`;
};

console.log("haystack1 =>", findNeedle(haystack_1));
console.log("haystack2 =>", findNeedle(haystack_2));
console.log("haystack3 =>", findNeedle(haystack_3));

console.log("haystack1 =>", findNeedle2(haystack_1));
console.log("haystack2 =>", findNeedle2(haystack_2));
console.log("haystack3 =>", findNeedle2(haystack_3));
