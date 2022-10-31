let array = [];

for (let i = 1; i <= 10; i++) {
  array.unshift(i);
}

console.log(array);

let fatorial = 1;

for (let i = 0; i < array.length; i++) {
  fatorial *= array[i];
}

console.log(fatorial);