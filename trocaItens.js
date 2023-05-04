// Aula 3.7 Faça como eu fiz: Extraindo funções
    // Como o código seria reutilizado em outro código, então foi criada uma função para ele
    
function trocaItens(itens, itemUm, itemDois){

    let itemAt = itens[itemUm];
    let itemAnt = itens[itemDois];

    itens[itemUm] = itemAnt;
    itens[itemDois] = itemAt;

}

module.exports = trocaItens;