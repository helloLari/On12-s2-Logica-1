//    3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.


const valor = 230
const taxa = valor * (10/100)
const total = valor - taxa

console.log(`O valor final da conta é de R$ ${total.toFixed(2)} reais, com Taxa de R$ ${taxa.toFixed(2)} reais para o garçom.`)
