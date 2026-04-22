// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
//
// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
//
// Constraints:
//
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

const stack1 = "howmuchwoodcouldawoodchuckchuckifawoodchuckcouldchuckwood";
const stack2 = "leetcode";
const needle1 = "chuck";
const needle2 = "leeto";
const needle3 = "wood";
const needle4 = "how";
const needle5 = "code";

const needleInHaystack = (haystack, needle) => {
  if (!haystack.includes(needle)) return -1;
  return haystack.indexOf(needle);
};

console.log(needleInHaystack(stack1, needle1));
console.log(needleInHaystack(stack2, needle2));
console.log(needleInHaystack(stack1, needle3));
console.log(needleInHaystack(stack1, needle4));
console.log(needleInHaystack(stack2, needle5));
