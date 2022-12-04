/* 01 - Elaborar um programa que leia nome, idade e pretensão salarial
de um candidato a uma vaga de emprego. Caso a idade esteja entre 20 e 30 anos
e a pretensão salarial entre 2000.00 e 3000.00 exiba “<nome> você foi selecionado”
ou senão, “<nome> procure outra vaga”.
Observação Utilize o if para exibir a mensagem de “<nome> você foi selecionado”.
Utilize o else para exibir a mensagem de “<nome> procure outra vaga” */6.


const prompt = require("prompt-sync")()

const nome = prompt("Nome do candidato: ")
const idade = Number(prompt("Idade do candidato: "))
const pretensao = Number(prompt("Pretensão salarial do candidato: "))

if (idade >= 20 && idade <= 30 && pretensao >= 2000 && pretensao <= 3000) {
    console.log(`${nome}, você foi selecionado!`)
} else {
    console.log(`${nome}, procure outra vaga.`)
}
