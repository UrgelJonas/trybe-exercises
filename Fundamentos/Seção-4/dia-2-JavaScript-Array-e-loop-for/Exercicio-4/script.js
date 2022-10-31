let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]); 
}

somaNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}

media = somaNumbers / numbers.length;

console.log(media);

if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}

console.log(maior);

let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        impar += 1;
    }
}

if (impar == 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(impar);
}

let menor = 100;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}

console.log(menor);

let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}

console.log(array);

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i] / 2);
}

