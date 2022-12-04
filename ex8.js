/* 08 – FUP que leia três notas de um aluno. Calcule a média ponderada, considerando
peso 4 para a maior nota e 3 para as outras duas. Exibir a mensagem "APROVADO" se a
média for maior ou igual a 7 e "REPROVADO" se a média for menor que 7. */

const prompt = require("prompt-sync")()

let n1 = 4
let n2 = 3
let n3 = 3

soma = n1 + n2 + n3 
media = soma / 3

if(media >= 7){
    console.log("Aprovado!");
}else if (media < 7){
    console.log("Reprovado.");
}

