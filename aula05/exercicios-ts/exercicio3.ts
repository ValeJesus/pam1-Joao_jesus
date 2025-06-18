
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}


const meuLivro: Livro = {
    titulo: 'A Jornada do Herói',
    autor: 'João Silva',
    anoPublicacao: 2021
};


function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}


exibirLivro(meuLivro);
