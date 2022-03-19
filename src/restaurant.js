const createMenu = (objeto) => ({
  
  fetchMenu: () => objeto, 
  
  consumption: [''],
  
  order(string) {
    this.consumption.push(string);
  },

  pay() {
    const array = Object.values(objeto);
    let total = 0;
    
    this.consumption.forEach((produto) => {
      array.forEach((produtoConsumido) => {
        total += produtoConsumido[produto] ? produtoConsumido[produto] : 0;
      });
    });

    const porcentagem = total + (total * 0.1);
    return porcentagem;
  },
});

module.exports = createMenu;
