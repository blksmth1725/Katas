// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

const s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

const meeting = (s) => {
  const string = s
    .toUpperCase()
    .split(";")
    .map((person) => person.split(":").reverse().join(", "))
    .sort()
    .join(")(");

  return "(" + string + ")";
};

console.log(meeting(s));
