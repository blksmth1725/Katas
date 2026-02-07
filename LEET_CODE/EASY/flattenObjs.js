let DOB = "07/05/90";
const obj = {
  user: {
    name: "Christian",
    lastName: "Sheen",
    address: {
      street: {
        number: 111,
        name: "Glenridge",
        suffix: "Parkway",
      },
      city: "Atlanta",
      zipCode: 30342,
    },
    about: {
      age: 35,
      gender: "male",
    },
    dateCreated: DOB,
  },
  active: true,
};

// const flattenObject = (obj, pKey = "", res = {}) => {
//   for (const [key, value] of Object.entries(obj)) {
//     const newKey = pKey ? `${pKey}.${key}` : key;

//     if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//       flattenObject(value, newKey, res);
//     } else {
//       res[newKey] = value;
//     }
//   }
//   return res;
// };

// const newObj = flattenObject(obj);

// const doSomething = (obj) => {
//   const { "user.name": name, "user.lastName": lastName } = obj;
//   return `${name} ${lastName}`;
// };

const doSomethingElse = (obj) => {
  const {
    user: {
      name,
      lastName,
      about: { gender, age },
      dateCreated,
    },
  } = obj;
  return `${name} ${lastName} is a ${gender} of age ${age} born in ${dateCreated}`;
};

// console.log(flattenObject(obj));
// console.log(doSomething(newObj));
console.log(doSomethingElse(obj));

// https://restcountries.com/v3.1/name/{name}
