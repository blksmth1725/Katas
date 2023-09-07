// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell
// prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from - 2 to + 26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs.Each pair contains information for a single potential member.
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values(in Haskell and C: Open or Senior)
// stating whether the respective member is to be placed in the senior or open category.;

const set1 = [
	[45, 12],
	[55, 21],
	[19, -2],
	[104, 20],
];
const set2 = [
	[3, 12],
	[55, 1],
	[91, -2],
	[53, 23],
];
const set3 = [
	[59, 12],
	[55, -1],
	[12, -2],
	[12, 12],
];

const openOrSenior = (data) => {
	return data.map((item) => {
		return item[0] >= 55 && item[1] > 7 ? (item = "Senior") : (item = "Open");
	});
};

console.log("Set1 =>", openOrSenior(set1));
console.log("Set2 =>", openOrSenior(set2));
console.log("Set3 =>", openOrSenior(set3));
