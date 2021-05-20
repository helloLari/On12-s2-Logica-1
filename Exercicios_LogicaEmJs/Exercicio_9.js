//    9 - Crie uma variavel que retorna a palavra (impar/par) de acordo com seu parâmetro.


let valor = 277
let valorImpar = valor % 2
let valorPar = valor % 3

if (valorImpar){
    console.log('Este é um Número Impar')
}else if (valorPar){
    console.log('Este é um Número Par')
}