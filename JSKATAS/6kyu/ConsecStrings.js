// You are given an array(list) strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.;

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

const data1 = {
	arr: ["zone", "abigail", "theta", "form", "libe", "zas"],
	int: 2,
};
//"abigailtheta"
const data2 = {
	arr: [
		"ejjjjmmtthh",
		"zxxuueeg",
		"aanlljrrrxx",
		"dqqqaaabbb",
		"oocccffuucccjjjkkkjyyyeehh",
	],
	int: 1,
};
//"oocccffuucccjjjkkkjyyyeehh"
const data3 = { arr: [], int: 3 };
//""
const data4 = {
	arr: [
		"itvayloxrp",
		"wkppqsztdkmvcuwvereiupccauycnjutlv",
		"vweqilsfytihvrzlaodfixoyxvyuyvgpck",
	],
	int: 2,
};
//"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
const data5 = {
	arr: ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
	int: 2,
};
//"wlwsasphmxxowiaxujylentrklctozmymu"
const data6 = {
	arr: ["zone", "abigail", "theta", "form", "libe", "zas"],
	int: -2,
};
//""
const data7 = { arr: ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], int: 3 };
//"ixoyx3452zzzzzzzzzzzz"
const data8 = {
	arr: ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"],
	int: 15,
};
//""
const data9 = { arr: ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], int: 0 };
//""

const longestConsec = ({ arr, int }) => {
	const n = arr.length;
	let longest = "";

	if (arr.length === 0 || int > arr.length || int <= 0) {
		return "";
	}

	for (let i = 0; i < n - int + 1; i++) {
		const currentConcatenation = arr.slice(i, i + int).join("");
		if (currentConcatenation.length > longest.length) {
			longest = currentConcatenation;
		}
	}

	return longest;
};

console.log(longestConsec(data1));
console.log(longestConsec(data2));
console.log(longestConsec(data3));
console.log(longestConsec(data4));
console.log(longestConsec(data5));
console.log(longestConsec(data6));
console.log(longestConsec(data7));
console.log(longestConsec(data8));
console.log(longestConsec(data9));
