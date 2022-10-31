function verificaPalindromo(palavra) {
    for (index in palavra) {
      if (palavra[index] === palavra[palavra.length - 1 - index]) {
        return true;
      }
      return false;
    }
}
    console.log(verificaPalindromo('arara'));