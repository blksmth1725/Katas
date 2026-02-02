// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const d1 = "http://github.com/carbonfive/raygun";
const d2 = "http://www.zombie-bites.com";
const d3 = "https://www.cnet.com";
const d4 = "http://google.co.jp";
const d5 = "www.xakep.ru";
const d6 = "https://youtube.com";

const clndn = (s) => {
  return s
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split(".")[0];
};
console.log(clndn(d1));
console.log(clndn(d2));
console.log(clndn(d3));
console.log(clndn(d4));
console.log(clndn(d5));
console.log(clndn(d6));
