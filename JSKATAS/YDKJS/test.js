const code = "PP-";
const mnuOne = "120-120-120-120-120";
const mnuTwo = "130140150160170";
const mnuThree = "98-76-54-321-10";
const mnuFour = "1012786";
const mnuFive = "A45-B-67-10";

const handleLength = (code, number) => {
	const mnu =
		`${code}${number}`.length > 15
			? `${code}${number}`.slice(0, 15)
			: `${code}${number}`;
	return mnu;
};

console.log("Truncated MNU =>", handleLength(code, mnuOne));
console.log("Truncated MNU =>", handleLength(code, mnuTwo));
console.log("Truncated MNU =>", handleLength(code, mnuThree));
console.log("Truncated MNU =>", handleLength(code, mnuFour));
console.log("Truncated MNU =>", handleLength(code, mnuFive));
