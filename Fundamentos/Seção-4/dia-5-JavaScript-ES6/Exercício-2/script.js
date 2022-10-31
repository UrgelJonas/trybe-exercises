let motor = "ligado";

const ligarDesligar = () => motor === "ligado" ? "ligado" : "desligado";
console.log(`O motor está ${ligarDesligar()}`);