const obj2 = {
  apple: "red",
  banana: "yellow",
  grape: "purple",
  onion: "white",
  zucchini: "green",
  blueberry: "blue",
  carrot: "orange",
};

const createInfiniteObject = () => {
  return new Proxy(
    {},
    {
      get(_target, prop) {
        if (typeof prop === "symbol") return undefined;
        return () => prop;
      },
    }
  );
};

const obj3 = createInfiniteObject();
console.log(obj3.foo());
console.log(obj3.Whoop());

console.log(obj2);
