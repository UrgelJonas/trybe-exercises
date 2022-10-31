const pecaEscolhida = "bispo";

switch (pecaEscolhida.toLowerCase()) {
    case "rei":
        console.log("Rei anda uma casa em qualquer direção");
        break;
    case "rainha":
        console.log("Rainha anda quantas casas quiser em qualquer direção");
        break;
    case "bispo":
        console.log("Bispo anda quantas casas quiser na diagonal");
        break;
    case "cavalo":
        console.log("Cavalo pode pular sobre as peças");
        break;
    case "torre":
        console.log("Torre anda quantas casas quiser na vertical ou horizontal");
        break;
    case "peão":
        console.log("Peão anda uma casa para frente, exceto no primeiro movimento quando pode ser duas casas");
        break;
    default:
        console.log("Erro! Peça inválida");
}