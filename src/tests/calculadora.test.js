const calculadora = require("../calculadora");

test("Calcula soma: 5 + 4 = 9", () => {
  expect(calculadora.soma(5, 4)).toBe(9);
});

test("Calcula subtração: 5 - 4 = 1", () => {
  expect(calculadora.subtracao(5, 4)).toBe(1);
});

test("Calcula multiplicação: 5 * 4 = 20", () => {
  expect(calculadora.multiplicacao(5, 4)).toBe(20);
});

test("Calcula divisão: 5 / 4 = 1.25", () => {
  expect(calculadora.divisao(5, 4)).toBe(1.25);
});
