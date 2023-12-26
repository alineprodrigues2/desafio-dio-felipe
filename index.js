// Defina o nome e a quantidade de experiência (XP) do herói
let Heroi = "NomeHeroi";
let xpPonto = 5000; // Substitua este valor pela quantidade real de XP do herói

// Utilize uma estrutura de decisão para determinar o nível do herói com base na XP
if (xpPonto < 1000) {
    console.log("O Herói de nome " + Heroi + "  está no nível Ferro.");
} else if (xpPonto >= 1001 && xpPonto <= 2000) {
    console.log("O Herói de nome " + Heroi + "está no nível Bronze.");
} else if (xpPonto >= 2001 && xpPonto <= 5000) {
    console.log("O Herói de nome " + Heroi + " está no nível Prata.");
} else if (xpPonto >= 5001 && xpPonto <= 7000) {
    console.log("O Herói de nome " + Heroi + " está no nível Ouro.");
} else if (xpPonto >= 7001 && xpPonto <= 8000) {
    console.log("O Herói de nome " + Heroi + " está no nível Platina.");
} else if (xpPonto >= 8001 && xpPonto <= 9000) {
    console.log("O Herói de nome " + Heroi + " está no nível Ascendente.");
} else if (xpPonto >= 9001 && xpPonto <= 10000) {
    console.log("O Herói de nome " + Heroi + " está no nível Imortal.");
} else {
    console.log("O Herói de nome " + Heroi + " está no nível Radiante.");
}
