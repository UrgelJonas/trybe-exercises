const maiorPalavra = (frase) => (
    frase.split(' ').sort((a, b) => b.length - a.length)[0]
);
console.log(`A maior palavra é ${maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")}`);
