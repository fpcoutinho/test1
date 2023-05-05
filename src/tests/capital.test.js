const capital = require("../capital");

test("Capitaliza a primeira letra do nome", () => {
  expect(capital("isabelle")).toEqual("Isabelle");
});
