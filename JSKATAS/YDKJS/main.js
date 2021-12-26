const companies = [
  { name: "Company 1", category: "Finance", start: 1981, end: 2004 },
  { name: "Company 2", category: "Retail", start: 1950, end: 2003 },
  { name: "Company 3", category: "Auto", start: 1960, end: 2020 },
  { name: "Company 4", category: "Energy", start: 1930, end: 2006 },
  {
    name: "Company 5",
    category: "Technology",
    start: 1981,
    end: 1999,
  },
  { name: "Company 6", category: "Finance", start: 1990, end: 2002 },
  { name: "Company 7", category: "Energy", start: 1920, end: 1950 },
  { name: "Company 9", category: "Auto", start: 1981, end: 2003 },
  { name: "Company 10", category: "Finance", start: 1990, end: 2000 },
  { name: "Company 8", category: "Retail", start: 2000, end: 2010 },
  {
    name: "Company 11",
    category: "Technology",
    start: 2001,
    end: 2003,
  },
  {
    name: "Company 12",
    category: "Pharmaceutical",
    start: 2002,
    end: 2015,
  },
  { name: "Company 13", category: "Finance", start: 1937, end: 1965 },
  { name: "Company 14", category: "Retail", start: 1965, end: 2021 },
  { name: "Company 15", category: "Energy", start: 1964, end: 2021 },
  {
    name: "Company 16",
    category: "Pharmaceutical",
    start: 1957,
    end: 1960,
  },
  {
    name: "Company 17",
    category: "Technology",
    start: 1985,
    end: 2010,
  },
];

companies.forEach((element) => {
  return element.end - element.start >= 20
    ? console.log(`${element.name} is older than 20 years`)
    : console.log(`${element.name} company is a baby`);
});

companies.filter((company) => {
  company.category === "Finance" ? console.log(company) : null;
});

const sortedCompanies = companies.sort((a, b) =>
  a.start > b.start ? 1 : -1
);
console.log(sortedCompanies);
