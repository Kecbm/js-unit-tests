const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    //  fail('Teste vazio!');
    
   
  });

  const objetoRetornado = createMenu('trybe');

    it(('Verifique se o retorno da função createMenu é um objeto que possui a chave fetchMenu, a qual tem como valor uma função'), () => {
      expect(typeof objetoRetornado).toBe('object');
      expect(typeof objetoRetornado.fetchMenu).toBe('function');
    });

    it(('Verifique se objetoRetornado.consumption, após a criação do menu, retorna um array vazio'), () => {
      expect(objetoRetornado.consumption).toStrictEqual(['']);
    });

    const pizzaria = createMenu('promocao');
    pizzaria.order('coxinha');

    it(('Verifique se, ao chamar uma função associada à chave order no objeto retornado, passando uma string como parâmetro, como objetoRetornado order coxinha, tal string é adicionada ao array retornado em objetoRetornado consumption'), () => {
      expect(pizzaria.consumption).toEqual(['', 'coxinha']);
    });
    
    const lanchonete = createMenu('cardapio');
    lanchonete.order('coxinha');
    lanchonete.order('agua');
    lanchonete.order('sopa');
    lanchonete.order('sashimi');

    it(('Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos'), () => {
      expect(lanchonete.consumption).toEqual(['', 'coxinha', 'agua', 'sopa', 'sashimi']);
    });

    const quiosque = createMenu('disponivel');
    quiosque.order('coxinha');
    quiosque.order('agua');
    quiosque.order('coxinha');

    it(('Verifique se a função order aceita que pedidos repetidos sejam acrescidos a consumption'), () => {
      expect(quiosque.consumption).toEqual(['', 'coxinha', 'agua', 'coxinha']);
    });
    
    const vendinha = createMenu({
      food: {'coxinha': 3.90, 'sanduiche': 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });
    vendinha.order('coxinha');
    vendinha.order('agua');
    vendinha.order('coxinha');

    it(('Verifique se, ao chamar objetoRetornado.pay, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em objetoRetornado.consumption'), () => {
      expect(vendinha.pay()).toBe(12.87);
    });
});
