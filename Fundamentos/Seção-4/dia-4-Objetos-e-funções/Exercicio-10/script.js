let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

    console.log("O livro favorito do leitor é " + leitor.livrosFavoritos[0].titulo + ".");

    leitor.livrosFavoritos.push(
        {
          titulo: 'Harry Potter e o Prisioneiro de Azkaban',
          autor: 'JK Rowling',
          editor: 'Rocco',
        },
      );

      console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");