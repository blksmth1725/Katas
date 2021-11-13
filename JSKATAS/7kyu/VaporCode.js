const s1 = "Lets Stay Together";
const s2 = "Started FROM THE bottom now we here";
const s3 = "Se la vie";
const s4 = "I AM THE GREATEST";
const s5 = "DREAm OnnnnNNN!";

const vaporcode = (s) => {
  const sArray = s
    .split("")
    .map((char, idx, arr) => {
      return char === " " ? null : char + "  ";
    })
    .join("")
    .toUpperCase()
    .trim(" ");
  return sArray;
};

console.log(vaporcode(s1));
console.log(vaporcode(s2));
console.log(vaporcode(s3));
console.log(vaporcode(s4));
console.log(vaporcode(s5));
