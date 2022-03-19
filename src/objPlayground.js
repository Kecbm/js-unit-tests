const calculator = (number1, number2) => {
  const objeto = {
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.trunc(number1 / number2),
    sub: number1 - number2,
  };

  return objeto;
};

const arrayGenerator = (type, object) => {
  let array = object;
  let novoArray = [];

  if (type === 'keys') {
    novoArray = Object.keys(array);
  } else if (type === 'values') {
    novoArray = Object.values(array);
  } else if (type === 'entries') {
    novoArray = Object.entries(array);
  }

  return novoArray;
};

module.exports = { calculator, arrayGenerator };
