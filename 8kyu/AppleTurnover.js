/*Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.*/

function apple(x) {
  const num = parseInt(x);
  const power = num * num;
  return power > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

console.log(apple("50"));
console.log(apple(4));
console.log(apple(50));
