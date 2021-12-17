// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

const smileSet1 = [":)", ":~D", ":(", ":-D", ":D", ":/", ":}"];
const smileSet2 = [
  ":-D",
  ":-D",
  ":~D",
  ":/",
  ":/",
  ":/",
  ":/",
  ":/",
  ":/",
  ":/",
  ":/",
];
const smileSet3 = [
  ":)",
  ":-D",
  ":)",
  ":D",
  ":X",
  ":)",
  ":)",
  ":)",
  ":)",
  ":}}",
  ":}",
  ":}}",
  ":}}",
];
const smileSet4 = [":~D", ":(", ":-D"];
const smileSet5 = [
  ":(",
  ":~",
  ":(",
  ":-D",
  ":-D",
  ":-D",
  ":D",
  ":/",
  ":{",
];

const smileCheck = function (arr) {
  const validSmileys = [
    ":)",
    ":D",
    ";)",
    ";D",
    ":-)",
    ":~)",
    ":-D",
    ":~D",
    ";-)",
    ";~)",
    ";-D",
    ";~D",
  ];
  return arr.filter((face) => validSmileys.includes(face));
};

console.log(smileCheck(smileSet1));
console.log(smileCheck(smileSet2));
console.log(smileCheck(smileSet3));
console.log(smileCheck(smileSet4));
console.log(smileCheck(smileSet5));
