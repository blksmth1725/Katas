const a1 = ["Telescopes", "Glasses", "Eyes", "Monocles"];
const a2 = ["Eyes", "Glasses", "Monocles", "Telescopes", "slimy", "shit"];
const a3 = ["Eyes", "Glasses", "jest", "bubbas"];
const a4 = [
	"Eyes",
	"Glasses",
	"jest",
	"bubbas",
	"colidascope",
	"margin",
	"Particle",
];

function sortByLength(a) {
	return a.sort((a, b) => a.length - b.length);
}

sortByLength(a1);
sortByLength(a2);
sortByLength(a3);
sortByLength(a4);
