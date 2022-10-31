function positivoOuNegativo(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "zero";
  }
}

console.log(positivoOuNegativo(0));