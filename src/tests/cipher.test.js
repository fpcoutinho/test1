const cipher = require("../cipher");

test("Testa se ABC com cipher 1 retorna BCD", () => {
  expect(cipher("ABC", 1)).toEqual("BCD");
});

test("Testa se abc com cipher 2 retorna cde", () => {
  expect(cipher("abc", 2)).toEqual("cde");
});

test("Testa se AbC com cipher 3 retorna DeF", () => {
  expect(cipher("AbC", 3)).toEqual("DeF");
});

test("Testa se Isa com cipher 1 retorna Jtb", () => {
  expect(cipher("Isa", 1)).toEqual("Jtb");
});
