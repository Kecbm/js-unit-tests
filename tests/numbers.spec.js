const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    //  fail('Teste vazio!');
  });

  it(('Verifica se a função numbers retorna true quando recebe um array de números'), () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true)
  });

  it(('Verifica se a função numbers retorna false quando o array contém uma string'), () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false)
  });

  it(('Verifica se a função numbers retorna false quando o array contém uma string'), () => {
    expect(numbers([1, 'a', 3])).toBe(false)
  });

  it(('Verifica se a função numbers retorna false quando o array recebido é vazio'), () => {
    expect(numbers([' '])).toBe(false)
  });
});
