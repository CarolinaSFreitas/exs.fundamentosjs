/* 06 - EUA (Escreva Um Algoritmo) que leia o ano de nascimento de um usuário e
informe se ele for menor ou maior de idade. */

const prompt = require("prompt-sync")()

const nome = prompt("Qual seu nome? ")
const ano = Number(prompt("Em que ano você nasceu? "))
const maiormenor = 2022 - ano

if(maiormenor >= 18){
    console.log(`${nome}, você é maior de idade.`);
}else{
    console.log(`${nome}, você é menor de idade.`);
}