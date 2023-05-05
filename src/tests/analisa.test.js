const analisa = require("../analisa");
const objeto = analisa([5, 6, 21, 25, 26, 51, 56]);

test("Calcula media", () => {
  expect(objeto.media).toBe(27.1);
});
