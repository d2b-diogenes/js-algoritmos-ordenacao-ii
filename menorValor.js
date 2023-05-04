// Aula 2.3 Reaproveitando código

function menorValor (arrProdutos, posicaoInicial) {

    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        // A posição "atual" irá inicar com o valor de "posicaoInicial"
        // Antes era "livro,length" e agora é "arrProdutos.length"

        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            // Onde antes era "livro", agora é "arrProdutos"

            maisBarato = atual;
        }
    }

    return maisBarato;
        // A função irá retornar a posição do produto mais barato

}

module.exports = menorValor;



/* // Aula 1.5 Exibindo os livros

const livros = require("./listaLivros");
    // Fazendo a importação do arquivo "listaLivros" que exporta a constante Array "precosLivros"

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    // "for" para passar por toda a Array

    if (livros[atual].preco < livros[maisBarato].preco) {
        // A comparação é feita pegando a propriedade preço dentro de cada objeto

        maisBarato = atual;
        
    }

}

console.log(`O livro mais barato custa R$${livros[maisBarato].preco} e o nome dele é ${livros[maisBarato].titulo}.`);

*/


/* // Aula 1.4 Do papel para o código

const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
    // "for" para passar por toda a Array

    if (precosLivros[atual] < precosLivros[maisBarato]) {
        // A cada loop o IF irá verificar se o valor do livro atual é menor do que o valor do livro mais barato que está guardado dentro da variável "maisBarato"
        // O primeiro loop incia verificando o preço do livro atual, que é o primeiro, com ele mesmo, pois a posição inicial da variável "maisBarato" é também o primeiro livro
        // No próximo loop seria comparado se o valor do livro atual é menor do que o valor do livro guardado dentro da variável "maisBarato"   
        // Se não for, fará novamente o loop comparando com o próximo item 
        // Se for, o seu índice será guardado dentro variável "maisBarato" e será feito novamente o loop comparando com o próximo item com o novo valor do livro guardado dentro da variável "maisBarato"

        maisBarato = atual;
            // Se o valor do livro comparado for mais barato, o seu índice será guardado dentr da variável "maisBarato"
    }

}

console.log(precosLivros[maisBarato]);
*/