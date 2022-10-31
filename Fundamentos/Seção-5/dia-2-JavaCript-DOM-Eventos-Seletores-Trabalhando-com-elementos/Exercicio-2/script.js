const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoDoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const primeiroFilhoDoFilhoFilho = document.createElement('section');
primeiroFilhoDoFilhoFilho.id = 'primeiroFilhoDoFilhoFilho';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoFilho);

const terceiroFilho = primeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
