let nomeJogador = "Rayssa"
let quantXP = 15000
let classificadorHeroi

if (quantXP <= 1000){
    classificadorHeroi = "Ferro"
} else if ((quantXP >= 1001) && (quantXP <= 2000)){
    classificadorHeroi = "Bronze"
} else if ((quantXP >= 2001)&& (quantXP <= 5000)){
    classificadorHeroi = "Prata"
} else if ((quantXP >=5001) && (quantXP <= 7000)){
    classificadorHeroi ="Ouro"
} else if ((quantXP >= 7001)&& (quantXP <=8000)){
    classificadorHeroi ="Platina"
} else if ((quantXP >=8001) && (quantXP <= 9000)){
    classificadorHeroi = "Ascendente"
} else if ((quantXP >=9001)&& (quantXP <= 10000)){
    classificadorHeroi = "Imortal"
}else {
    classificadorHeroi = "Radiante"
}

console.log("O Herói de nome: " + nomeJogador + " está no nível de: " + classificadorHeroi)