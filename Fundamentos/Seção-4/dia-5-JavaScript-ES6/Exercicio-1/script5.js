let speed = 90;
const speedCar = speed => speed >= 120 ? `Você ultrapassou o limite de velocidade.` : `Você está dentro do limite de velocidade.`
console.log(speedCar(speed));
