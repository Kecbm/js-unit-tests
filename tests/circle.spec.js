const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    //  fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
  });

  it(('Verifica se circle retorna undefined caso o parâmetro passado não seja um número'), () => {
    expect(circle('a')).toBe(undefined)
  });

  it(('Verifica se circle retorna um objeto'), () => {
    expect(circle(1)).toMatchObject({radius: 1, area: 3.14, circumference: 6.28})
  });

  it(('Verifica se o objeto retornado tem 3 propriedades'), () => {
    expect(circle(7)).toMatchObject({radius: 7, area: 153.86, circumference: 43.96})
  });

  it(('Verifica se a função retorna undefined quando não recebe nenhum parâmetro'), () => {
    expect(circle()).toBe(undefined)
  });

  it(('Verifica se a função retorna a circuferência correta para um círculo de raio 2'), () => {
    expect(circle(2)).toMatchObject({circumference: 12.56})
  });

  it(('Verifica se a função retorna a área correta para um círculo de raio 3'), () => {
    expect(circle(3)).toMatchObject({area: 28.259999999999998})
  });

  it(('Verifica se a função retorna, num objeto, os dados corretos para um círculo de raio 3'), () => {
    expect(circle(3)).toMatchObject({radius: 3, area: 28.259999999999998, circumference: 18.84})
  });
});
