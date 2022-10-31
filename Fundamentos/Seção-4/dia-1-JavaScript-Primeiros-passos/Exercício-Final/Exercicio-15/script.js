const salarioBruto = 8000;
let salarioLiquido; 
let aliquotaINSS;
let aliquotaIR;

    if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
    } else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94) {
        aliquotaINSS = salarioBruto * 0.09;
    }   else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92) {
        aliquotaINSS = salarioBruto * 0.11;
    }  else {
        aliquotaINSS = 570.88;
    }
    
    salarioLiquido = salarioBruto - aliquotaINSS;

    if (salarioLiquido <= 1903.98) {
        aliquotaIR = 0;
    } else if (salarioLiquido <= 2826.65 && salarioLiquido > 1903.98) {
        aliquotaIR = (salarioLiquido * 0.075) - 142.80;
    } else if (salarioLiquido <= 3751.05 && salarioLiquido > 2826.65) {
        aliquotaIR = (salarioLiquido * 0.15) - 354.80;
    } else if (salarioLiquido <= 4664.68 && salarioLiquido > 3751.05) {
        aliquotaIR = (salarioLiquido * 0.225) - 636.13;
    } else {
        aliquotaIR = (salarioLiquido * 0.275) - 869.36;
    }

    console.log("O salário liquido é de " + (salarioLiquido - aliquotaIR) + " reais.");
