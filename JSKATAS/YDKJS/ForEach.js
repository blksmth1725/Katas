import { companies } from "./Data";

const companiesArr = companies;

const listCompanies = (arr) => {
  arr.forEach((element) => {
    console.log(element);
    return element.end - element.start >= 20
      ? `${element.name} is older than 20 years`
      : `${element.name} company is a baby`;
  });
};

console.log(listCompanies(companiesArr));
console.log(companiesArr);
