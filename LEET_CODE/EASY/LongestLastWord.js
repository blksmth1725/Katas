const s = "   fly me   to   the moon  ";

const lll = (str) => {
  return str.replace(/\s+/g, " ").trim().split(" ").slice(-1)[0].length;
};

console.log(lll(s));
