let maiorNumPrimo = 0;

for (let numAtual = 2; numAtual <= 50; numAtual += 1) {
  let numPrimo = true;

  for (let divisor = 2; divisor < numAtual; divisor += 1) {
    if (numAtual % divisor === 0) {
      numPrimo = false;
    }
  }

  if (numPrimo) {
    maiorNumPrimo = numAtual;
  }
}

console.log(maiorNumPrimo);