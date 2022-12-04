/* 10 - FUP que dada a idade de um atleta classifique-o em uma das seguintes
categorias:
05 - 07 anos – Infantil 1
08 - 10 anos – Infantil 2
11 - 13 anos – Juvenil 1
14 - 17 anos – Juvenil 2
18 anos ou mais – Adulto */

const prompt = require("prompt-sync")()

const idade = Number(prompt("Qual sua idade? "))

if (idade >= 5 && idade <= 7) {
    console.log("Você está na categoria Infantil 1");
} else if (idade >= 8 && idade <= 10) {
    console.log("Você está na categoria Infantil 2");
} else if (idade >= 11 && idade <= 13) {
    console.log("Você está na categoria Juvenil 1");
} else if (idade >= 14 && idade <= 17) {
    console.log("Você está na categoria Juvenil 2");
} else if (idade >= 18) {
    console.log("Você está na categoria Juvenil 2");
}