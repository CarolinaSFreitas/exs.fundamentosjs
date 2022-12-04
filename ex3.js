/* 03 - Uma empresa quer verificar se um empregado está qualificado para a
aposentadoria ou não.
Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
- Ter no mínimo 60 anos de idade.
- Ter trabalhado no mínimo 25 anos.
- Ter no mínimo 55 anos E ter trabalhado no mínimo 20 anos.
Com base nas informações acima, faça um algoritmo que leia nome, ano de nascimento e
ano que o empregado começou a trabalhar.
Exibir a idade, tempo de trabalho e a mensagem ‘pode requerer aposentadoria' ou ‘não
pode requerer'.
Exemplo:
ENTRADA
Nome: Gilberto
Ano de Nascimento: 1962
Ano que começou a trabalhar: 1982
SAÍDA
Idade: 60
Tempo de Serviço: 40
Gilberto, você pode requerer aposentadoria */

const prompt = require("prompt-sync")()

const nome = prompt("Nome: ")
const ano = Number(prompt("Ano de nascimento: "))
const trab = Number(prompt("Ano em que começou a trabalhar: "))

let idade = 2022 - ano 
let tempo = 2022 - trab

console.log(`Idade: ${idade}`)
console.log(`Tempo de serviço: ${tempo}`)

if(idade >= 60 || tempo >= 25 || (idade >= 55 && tempo >= 20)){
console.log((`${nome}, você pode requerer aposentadoria.`));
}else{
    console.log(`${nome}, você NÃO pode requerer aposentadoria`);
}