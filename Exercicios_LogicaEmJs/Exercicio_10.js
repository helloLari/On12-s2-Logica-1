//    10 - Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.


let anoNascimento = 1991
let idade = 2021  - anoNascimento

console.log(`Você tem ${idade} anos`)

if (idade >= 18 && idade <= 100) {
    console.log('Você é Maior de Idade!')
} else if (idade < 18) {
    console.log('Você é Menor de Idade!')
}