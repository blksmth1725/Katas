const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B"];

const d = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
const e = ["A", "B", "C", "W"];

function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return "";
  return listOfCat
    .map((letter) => {
      const sum = listOfArt.reduce(
        (a, b) => a + (b.charAt(0) === letter ? +b.split(" ")[1] : 0),
        0,
      );
      return `(${letter} : ${sum})`;
    })
    .join(" - ");
}

console.log(stockList(b, c));
console.log(stockList(d, e));
