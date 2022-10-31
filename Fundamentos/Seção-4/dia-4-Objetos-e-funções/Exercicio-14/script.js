function maiorNome(nomes) {
    let maiorNome = nomes[0];
    for (let i = 1; i < nomes.length; i++) {
        if (nomes[i].length > maiorNome.length) {
            maiorNome = nomes[i];
        }
    }
    return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));