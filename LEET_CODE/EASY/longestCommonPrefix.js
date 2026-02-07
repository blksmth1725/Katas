const lcp = (strs) => {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

const s1 = "flower";
const s2 = "flounder";
const s3 = "flow";
const s4 = "flop";
const s5 = "floss";
const s6 = "flog";

const arr1 = [s1, s2, s3, s4, s5, s6];
console.log(lcp(arr1));
