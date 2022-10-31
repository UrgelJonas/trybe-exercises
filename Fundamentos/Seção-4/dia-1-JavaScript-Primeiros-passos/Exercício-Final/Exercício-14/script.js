const valorCusto = 300;
const valorVenda = 500;
const impostoSobreOCusto = 0.2;
const custoTotal = valorCusto + (valorCusto * impostoSobreOCusto);
const lucro = (valorVenda - custoTotal) * 1000;

console.log("O lucro vendendo mil produtos é de " + lucro);

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Erro: valor inválido');
}

