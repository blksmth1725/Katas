const s = "anagram";
const t = "nagaram";
const u = "car";
const v = "rat";

const isAnagram = (s, t) => {
  console.log(s.split("").sort().join(""));
  console.log(t.split("").sort().join(""));
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram(s, t));
console.log(isAnagram(u, v));
