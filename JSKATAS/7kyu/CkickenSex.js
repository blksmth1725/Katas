// Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

// Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the experts choices to generate a correctness score.

// Scoring Rules
// When they agree, he gets 1 point.
// When they disagree but one has said '?', he gets 0.5 points.
// When they disagree completely, he gets 0 points.

const arr1 = ["M", "M", "F", "?", "?", "F", "F"];
const arr2 = ["M", "M", "F", "?", "?", "F", "F"];
const arr3 = ["M", "F", "F", "?", "?", "F", "F"];
const arr4 = ["M", "M", "F", "F", "?", "F", "F"];
const arr5 = ["M", "M", "F", "?", "?", "F", "F", "M", "F", "F"];
const arr6 = ["M", "M", "F", "?", "?", "F", "F", "?", "?", "?"];

const correctness = (bobsDecisions, expertDecisions) => {
  return bobsDecisions
    .map((x, i) =>
      x == expertDecisions[i]
        ? 1
        : x == "?"
        ? 0.5
        : expertDecisions[i] == "?"
        ? 0.5
        : 0
    )
    .reduce((a, b) => a + b, 0);
};

console.log(correctness(arr1, arr2));
console.log(correctness(arr3, arr4));
console.log(correctness(arr5, arr6));
