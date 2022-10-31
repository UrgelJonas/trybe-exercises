function somaDosNumeros(numeros) {
    let total = 0;

    for (let i = 1; i <= numeros; i += 1) {
        total = total + i;
    }
    return total;
}

console.log(somaDosNumeros(5));