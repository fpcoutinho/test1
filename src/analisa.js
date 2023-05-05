function analisa(array) {
  const objeto = {
    maior: Math.max(...array),
    menor: Math.min(...array),
    media: Number((array.reduce((a, b) => a + b) / array.length).toFixed(1)),
    tamanho: array.length,
  };
  return objeto;
}

module.exports = analisa;
