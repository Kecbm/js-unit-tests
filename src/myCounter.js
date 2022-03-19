const myCounter = () => {
  var myArray = [];
  for (let indice = 0; indice <= 3; indice += 1) {
    myArray.push(indice);
    for (let counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};

module.exports = myCounter;
