const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //  fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
  });

    it(('Verifica se productDetails é uma função'), () => {
      expect(typeof productDetails).toBe('function')
    });

    it(('Verifica se o retorno da função é um array'), () => {
      expect(productDetails('Alcool gel', 'Máscara')).toEqual([{
          name: 'Alcool gel',
          details: {
            productId: 'Alcool gel123'
          }
        },
        {
          name: 'Máscara',
          details: {
            productId: 'Máscara123'
          }
        }
      ])
    });

    const array = productDetails('Alcool gel', 'Máscara');

    it(('Verifica se o array retornado por productDetails contém dois itens'), () => {
      expect(array.length).toBe(2)
    });

    it(('Verifica se os itens do array retornado por productDetails são objetos'), () => {
      for (let indice = 0; indice < array.length; indice += 1){
      expect(typeof array[indice]).toBe('object')
      }
    });

    const objetoUm = array[0];
    const objetoDois = array[1];

    it(('Verifica se os objetos do array retornado por productDetails são diferente entre si'), () => {
      expect(objetoUm).not.toBe(objetoDois)
    });

    const idObjetoUm = parseInt(objetoUm.details.productId);
    const idObjetoDois = parseInt(objetoDois.details.productId);

    it(('Verifica se os dois productIds terminam com 123'), () => {
      expect(idObjetoUm).toBe(idObjetoDois)
    });
});
