/* 07 – EUA que leia três números e calcule a média aritmética desses números. */

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Primeiro número: "))
const num2 = Number(prompt("Segundo número: "))
const num3 = Number(prompt("Terceiro número: "))

soma = num1 + num2 + num3 
media = soma / 3

console.log(`${media}`);