const substituaX = (nome) => {
    const frase = `Tryber x aqui!`;
    const novaFrase = frase.replace('x', nome);
    console.log(novaFrase);
} 

substituaX('Jonas');

const minhasSkiils = (func) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let resultado = `Minhas três principais habilidades são:`;

    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado}
        - ${skills[index]}`;
    }
    return resultado;
}

console.log(minhasSkiils(substituaX('Jonas')));