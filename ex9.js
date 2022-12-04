/* 09 – EUA que leia dois valores e informe se "São múltiplos" ou "Não são
múltiplos". */

const prompt = require("prompt-sync")()

const n1 = Number(prompt("1º Número: "))
const n2 = Number(prompt("2º Número: "))

if (n1 % n2 == 0){
    console.log(`${n1} é múltiplo de ${n2}.`)
}else{
    console.log(`${n1} NÃO é múltiplo de ${n2}.`)
}