// Aula 3.7 Faça como eu fiz: Extraindo funções

const livros = require("./listaLivros");
const trocaItens = require("./trocaItens");

function insertionSort(lista) {

    for(let atual = 0; atual < lista.length; atual++) {

        let posicao = atual;

        while (posicao > 0 && lista[posicao].preco < lista[posicao - 1].preco) {

            trocaItens(lista, posicao, posicao-1);
                // Chama a função que irá fazer a troca de posição dos objetos
                // A função pede 3 parâmetros, a lista e as posições que serão trocadas 

            posicao--;

        }
    }

    console.log(lista);

}

insertionSort(livros);



/* // Aula 3.2 InsertionSort: Algoritmo de ordenação 

const livros = require("./listaLivros");

function insertionSort(lista) {

    for(let atual = 0; atual < lista.length; atual++) {
        // "for" que irá percorrer toda a lista 

        let analise = atual;
            // A variável "analise" irá receber a posição atual do loop do for
            // O item "analise" será movido a cada loop, de acordo com o valor da variável "atual"
            // Essa variável será usada dentro do "while" como condição de parada do Loop


        while(analise > 0 && lista[analise].preco < lista[analise -1].preco) {
            // O "while" faz o Loop enquando a condição colocada for verdadeira
            // Enquando as duas condiçõe forem verdadeiras, será feito o Loop
            // "analise > 0" Se "analise" for maior que 0 - Na primeira posição do Array o "while" não irá entrar, pois é a posição 0. Então, será pulada a primeira posição.
            // "lista[analise].preco < lista[analise -1].preco" Se o preço analisado for menor que o preço do item anterior, será executado o bloco de códigos

            // Se a condição for verdadeira, Se o preço analisado for menor que o preço do item anterior
            // As variáveis irão receber os objetos para que possam ser trocados de posição
            let itemAnalise = lista[analise];''
            let itemAnterior = lista[analise - 1];

            // Trocando os objetos de posição
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            analise--;
            // O "while" precisa que seja informado no código a condição de parada do Loop
            // Irá decrementar até que a condição dentro do "while" não seja mais verdadeira
            // Ao final será decrementado do valor de "analise" para que o item trocado de posição, por ser de menor preço, seja analisado/comparado novamente com o novo item anterior a ele.

        }

    }

    console.log(lista);
    // return livros;

}

insertionSort(livros);

 */