const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho';

const primeiroFilho = pai.firstElementChild;

const primeirofilho2 = elementoOndeVoceEsta.previousElementSibling;

const textElement = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;