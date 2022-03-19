const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    //  fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    
  });

  it(('Verifica se a função retorna undefined quando não recebe nenhum parâmetro'), () => {
    expect(getCharacter()).toBe(undefined)
  });

  it(('Verifica se a função retorna o objeto correto para o parâmetro Arya'), () => {
    expect(getCharacter('Arya')).toEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ]
    })
  });

  it(('Verifica se a função retorna o objeto correto para o parâmetro Brienne'), () => {
    expect(getCharacter('Brienne')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
    })
  });

  it(('Verifica se a função retorna o objeto correto para o parâmetro Melissandre'), () => {
    expect(getCharacter('Melissandre')).toEqual({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
    })
  });

  const array = ['Arya', 'Brienne', 'Melissandre'];
  const arrayMaiusculo = ['arya', 'brienne', 'melissandre'];
  let resultado = 0;

  it(('Verifica se os parâmetros não são Case Sensitive'), () => {
    for (let indice = 0; indice < array.length; indice += 1){
    resultado = array[indice].localeCompare(arrayMaiusculo[indice]);

    expect(resultado).toBe(1)
    }
  });

  it(('Verifica se a função retorna undefined ao passar um nome que não está na tabela'), () => {
    expect(getCharacter('Klecianny')).toBe(undefined)
  });
});
