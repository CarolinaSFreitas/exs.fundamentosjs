/* 04 - Elaborar um programa que leia 3 números (diferentes).
Calcule e exiba a soma dos 2 maiores.
Exemplo:
1º Número: 8
2º Número: 7
3º Número: 10
Soma dos 2 maiores é: 18 */

const prompt = require("prompt-sync")()

let n1 = Number(prompt("1° nr: "))
let n2 = Number(prompt("2° nr: "))
let n3 = Number(prompt("3° nr: "))
let soma = 0
if (n1 < n2 && n1 < n3) {
   soma = n2 + n3
} else if (n2 < n1 && n2 < n3){
   soma = n1 + n3
} else {
   soma = n1 + n2
}
console.log(`Soma dos dois maiores: ${soma}`)