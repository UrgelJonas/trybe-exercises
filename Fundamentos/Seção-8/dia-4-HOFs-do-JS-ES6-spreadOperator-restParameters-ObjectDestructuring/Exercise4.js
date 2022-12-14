const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
    // funcao para filtrar pessoas nascidas entre 1901 e 2000 e autralianas
    const filterPeople = (peoples) => {
        return peoples.filter(({nationality, bornIn}) => {
            return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
        });
    };

    console.log(filterPeople(people));
    
