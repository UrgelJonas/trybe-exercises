let a = 10;
let b = 20;
let c = 30;

function maiorNumero() {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maiorNumero());