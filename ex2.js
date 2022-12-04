/* 02 - Elaborar um programa que leia 3 lados e verifique se eles podem ou não
formar um triângulo.
Para formar um triângulo um dos lados não pode ser maior que a soma dos outros dois.
Caso possam formar, apresente também qual o tipo de triângulo:
- Equilátero: 3 lados iguais
- Isósceles: 2 lados iguais
- Escaleno: 3 lados diferentes */

const prompt = require("prompt-sync")()

let a = Number(prompt("Lado A: "))
let b = Number(prompt("Lado B: "))
let c = Number(prompt("Lado C: "))

if(a > b+c || b > a+c || c > a+b){
    console.log("Lados NÃO formam um triângulo")
}else{
    console.log("Lados formam um triângulo")
    if (a==b && b==c){
        console.log("Triângulo equilátero")
    }else if (a==b || a==c || b==c){
        console.log("Triângulo isóceles")
    }else{
        console.log("Triângulo escaleno")
    }
}