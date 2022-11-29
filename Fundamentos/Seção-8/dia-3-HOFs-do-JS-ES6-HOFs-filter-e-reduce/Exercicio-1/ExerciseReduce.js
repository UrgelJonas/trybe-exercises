// Fonte: <https://restcountries.com/v2/all>

const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

  // Funcao para Calcule a quantidade total da população de todos os países com reduce
    function totalPopulation() {
        return countries.reduce((acc, curr) => acc + curr.population, 0);
    }
    console.log(totalPopulation());

    // Funcao para Calcule a area total de todos os países com reduce
    function totalArea() {
        return countries.reduce((acc, curr) => acc + curr.area, 0);
    }
    console.log(totalArea());

    // funcao para encontrar o pais com maior nome
    function biggestName() {
        return countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
    }
    console.log(biggestName());

    // funcao para retornar a quantidade de vezes que a letra A maiuscula ou minuscula aparece no array de nomes
    const names = [
        'Aanemarie', 'Adervandes', 'Akifusa',
        'Abegildo', 'Adicellia', 'Aladonata',
        'Abeladerco', 'Adieidy', 'Alarucha',
      ];
      
      const expectedResult = 20;
      
      const countA = () => {
        // retorne seu código aqui
        return names.reduce((acc, curr) => {
            return acc + curr.split('').reduce((acc, curr) => {
                return acc + (curr === 'a' || curr === 'A' ? 1 : 0);
            }, 0);
        }
        , 0);
        }

        console.log(countA());

