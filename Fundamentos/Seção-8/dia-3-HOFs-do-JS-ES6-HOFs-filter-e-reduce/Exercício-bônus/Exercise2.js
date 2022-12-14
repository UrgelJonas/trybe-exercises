const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  // retorne seu código aqui
    return books.reduce((acc, cur, index, array) => {
        if (index === array.length - 1) {
            return `${acc} ${cur.author.name}.`;
        }
        return `${acc} ${cur.author.name},`;
    }
    , '');
}

console.log(reduceNames());


const averageAge = () => {
  // retorne seu código aqui
    const sum = books.reduce((acc, cur) => {
        return acc + (cur.releaseYear - cur.author.birthYear);
    }
    , 0);
    return sum / books.length;
}

console.log(averageAge());

const longestNamedBook = () => {
    // retorne seu código aqui
        return books.reduce((acc, cur) => {
            if (acc.name.length > cur.name.length) {
                return acc;
            }
            return cur;
        }
        , books[0]).name;
    }

console.log(longestNamedBook());