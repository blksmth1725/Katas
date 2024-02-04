const array1 = []; //-->  "no one likes this"
const array2 = ["Peter"]; //-->  "Peter likes this"
const array3 = ["Jacob", "Alex"]; //-->  "Jacob and Alex like this"
const array4 = ["Max", "John", "Mark"]; //-->  "Max, John and Mark like this"
const array5 = ["Alex", "Jacob", "Mark", "Max"]; //-->  "Alex, Jacob and 2 others like this"

function likes(names) {
	if (!names.length) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
}

console.log("who likes this? =>", likes(array1));
console.log("who likes this? =>", likes(array2));
console.log("who likes this? =>", likes(array3));
console.log("who likes this? =>", likes(array4));
console.log("who likes this? =>", likes(array5));

const array6 = []; //-->  "no one likes this"
const array7 = ["Peter"]; //-->  "Peter likes this"
const array8 = ["Jacob", "Alex"]; //-->  "Jacob and Alex like this"
const array9 = ["Max", "John", "Mark"]; //-->  "Max, John and Mark like this"
const array10 = ["Alex", "Jacob", "Mark", "Max"];

function likes(names) {
	const whoLikesThis = names.map((name) => {
		return name;
	});

	return whoLikesThis;
}

console.log("who likes this? =>", likes(array6));
console.log("who likes this? =>", likes(array7));
console.log("who likes this? =>", likes(array8));
console.log("who likes this? =>", likes(array9));
console.log("who likes this? =>", likes(array10));
