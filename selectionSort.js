// Aula 3.7 Faça como eu fiz: extraindo para uma função

const livros = require('./listaLivros');
const menorPreco = require('./menorValor');
const trocaItens = require("./trocaItens");

livros.forEach( (_, indice) => {

    let livroMenorPreco = menorPreco(livros, indice);

    trocaItens(livros, indice, livroMenorPreco );

})

console.log(livros);























/* // Aula 2.7 Faça como eu fiz: usando agora o forEach para fazer o selectionSort

const livros = require("./listaLivros");
const menorValor = require("./menorValor");

livros.forEach( (livro, atual) => {

    let menorPreco = menorValor(livros, atual);
    
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menorPreco];

    livros[atual] = livroMenorPreco;
    livros[menorPreco] = livroAtual;

})

console.log(livros);

*/ 


/* // Aula 2.3 selectionSort: Algoritmo de ordenação 

const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.length - 1; atual++) {
    //Foi colocado -1 para que ele não precise verificar a última posição, pois se ela está lá, é pq é o livro mais caro

    let menor = menorValor(livros, atual);  
        // A variável "menor" irá receber o retorno da posição que tem o livro de menor valor

    //Variáveis recebem os os objetos com os livros que serão trocados de posição
    
    let livroAtual = livros[atual];
        // A variável "livroAtual" irá rebecer o objeto que corresponde o livro Atual, posição atual

    let livroMenorValor = livros[menor];
        // A variável "livroMenorValor" irá receber o objeto que corresponte ao livro de menor valor

    // Trocando as posições dos livros 

    livros[atual] = livroMenorValor;
        // Será feita a troca, a posição que está o livro atual, posição atual, irá receber o objeto do livro com o menor valor 

    livros[menor] = livroAtual;
        //Será feita a troca, a posição que estava o livro com o menor preço irá receber o objeto do livro com a posição atual
    
}

console.log(livros);

*/ 

