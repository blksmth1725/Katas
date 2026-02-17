const longestSubString = (s) => {
  let lft = 0;
  let ml = 0;
  const seen = new Set();

  for (let rght = 0; rght < s.length; rght++) {
    while (seen.has(s[rght])) {
      seen.delete(s[lft]);
      lft++;
    }

    seen.add(s[rght]);
    ml = Math.max(ml, rght - lft + 1);
  }
  return ml;
};

const findLongestSubString = (string) => {
  let left = 0;
  let maxLength = 0;
  let bestStart = 0;
  const seen = new Set();

  for (let right = 0; right < string.length; right++) {
    while (seen.has(string[right])) {
      seen.delete(string[left]);
      left++;
    }
    seen.add(string[right]);
    const windowLength = right - left + 1;

    if (windowLength > maxLength) {
      maxLength = windowLength;
      bestStart = left;
    }
  }
  const subString = string.slice(bestStart, bestStart + maxLength);
  return { maxLength, subString };
};

console.log(longestSubString("abcdedeacjaqlmonpypsdklmnop"));
