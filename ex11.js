/* 11 - EUA que leia quatro notas obtidas por um aluno. Calcular a média usando a fórmula:
Média = (Nota1 + Nota2 x 2 + Nota3 x 3 + Nota 4) / 7
Informe o conceito do aluno de acordo com a tabela:

Média	Conceito
9.0 e <= 10	A
8.0 e < 9.0	B
6.0 e < 8.0	C
4.0 e < 6.0	D
< 4.0	E

Informar o conceito e a mensagem: APROVADO se o conceito for A,B ou C e REPROVADO se o conceito for D ou E. */

const prompt = require("prompt-sync")()

const nota1 = Number(prompt("1ª Nota: "))
const nota2 = Number(prompt("2ª Nota: "))
const nota3 = Number(prompt("3ª Nota: "))
const nota4 = Number(prompt("4ª Nota: "))

media = (nota1 + nota2 * 2 + nota3 * 3 + nota4) / 7

if(media >= 9 && media <= 10){
    console.log("Conceito A. Aprovado(a)!");
}else if(media >= 8 && media <= 9){
    console.log("Conceito B. Aprovado(a)!");
}else if(media >= 6 && media <= 8){
    console.log("Conceito C. Aprovado(a)!");
}else if(media >= 4 && media <= 6){
    console.log("Conceito D. Reprovado(a).");
}else if(media <= 4){
    console.log("Conceito E. Reprovado(a).");
}

