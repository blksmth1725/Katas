// DESCRIPTION:
// Your start - up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
// Marketing thinks it would be great to welcome visitors to the site in their own language.
// Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting
// if you have it in your database.
// It should default to English if the language is not in the database, or in the event of an invalid input.

// The Database
// [ ("english", "Welcome"),
//  ("czech", "Vitejte"),
//  ("danish", "Velkomst"),
//  ("dutch", "Welkom"),
//  ("estonian", "Tere tulemast"),
//  ("finnish", "Tervetuloa"),
//  ("flemish", "Welgekomen"),
//  ("french", "Bienvenue"),
//  ("german", "Willkommen"),
//  ("irish", "Failte"),
//  ("italian", "Benvenuto"),
//  ("latvian", "Gaidits"),
//  ("lithuanian", "Laukiamas"),
//  ("polish", "Witamy"),
//  ("spanish", "Bienvenido"),
//  ("swedish", "Valkommen"),
//  ("welsh", "Croeso")
// ]

const data = [
	{ language: "english", greeting: "Welcome" },
	{ language: "czech", greeting: "Vitejte" },
	{ language: "danish", greeting: "Velkomst" },
	{ language: "dutch", greeting: "Welkom" },
	{ language: "estonian", greeting: "Tere tulemast" },
	{ language: "finnish", greeting: "Tervetuloa" },
	{ language: "flemish", greeting: "Welgekomen" },
	{ language: "french", greeting: "Bienvenue" },
	{ language: "german", greeting: "Willkommen" },
	{ language: "irish", greeting: "Failte" },
	{ language: "italian", greeting: "Benvenuto" },
	{ language: "latvian", greeting: "Gaidits" },
	{ language: "lithuanian", greeting: "Laukiamas" },
	{ language: "polish", greeting: "Witamy" },
	{ language: "spanish", greeting: "Bienvenido" },
	{ language: "swedish", greeting: "Valkommen" },
	{ language: "welshgreeting", greeting: "Croeso" },
];

const data1 = [
	("english", "Welcome"),
	("czech", "Vitejte"),
	("danish", "Velkomst"),
	("dutch", "Welkom"),
	("estonian", "Tere tulemast"),
	("finnish", "Tervetuloa"),
	("flemish", "Welgekomen"),
	("french", "Bienvenue"),
	("german", "Willkommen"),
	("irish", "Failte"),
	("italian", "Benvenuto"),
	("latvian", "Gaidits"),
	("lithuanian", "Laukiamas"),
	("polish", "Witamy"),
	("spanish", "Bienvenido"),
	("swedish", "Valkommen"),
	("welsh", "Croeso"),
];

console.log(data);

const greet = (language) => {};
