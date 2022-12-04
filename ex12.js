/* 12 - O departamento que controla o índice de radiação “Gama Vibranium Nuclear” 
monitora três grupos de usinas que são poluentes do meio ambiente. 

O índice de radiação aceitável varia de 0.04 até 0.3. 

Se o índice subir para 0.35 as indústrias do primeiro grupo são intimadas a 
suspenderem suas atividades.

Caso o índice cresça para 0.45 as do primeiro e segundo grupo são intimadas a 
suspenderem suas atividades.

Se o índice atingir 0.6 todos os três grupos devem ser notificados a paralisarem 
suas atividades. 

EUA que leia o índice de poluição medido e emita a notificação adequada aos 
diferentes grupos de empresas. */

// grupo1 
// grupo2 
// grupo3 

const prompt = require("prompt-sync")()

const rad = Number(prompt("Radiação: "))

if(rad >= 0.04 && rad <= 0.35){
console.log("Indústrias do primeiro grupo serão intimadas a suspenderem suas atividades.")
}else if (rad => 0.45 && rad < 0.59){
console.log("Indústrias do primeiro e segundo grupo serão intimadas a suspenderem suas atividades.")
}if(rad >= 0.60){
console.log("Indústrias de todos os três grupos serão intimadas a suspenderem suas atividades.")
}