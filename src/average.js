const average = (array) => {
  //  Meu código aqui
  let somaDosElementos = 0;
  let mediaDosElementos = 0;
  const elementosDoArray = (array.length);

  if (array.length === 0) {
    return undefined;
  }
  
  for (let indice = 0; indice < array.length; indice += 1) {
    if (typeof (array[indice]) !== 'number') {
      return undefined;
    }
    somaDosElementos += array[indice];
    mediaDosElementos = (somaDosElementos / array.length);
  }

  return (Math.round(mediaDosElementos));
};

module.exports = average;
