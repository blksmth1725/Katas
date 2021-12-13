const { expect } = require("@jest/globals");
const Check = require("./YesOrNo");

test("Checks Boolean value", () => {
  expect(Check(true));
});
