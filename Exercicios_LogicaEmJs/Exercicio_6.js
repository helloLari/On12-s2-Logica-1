//    6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.



const diaSemana = 7

switch (diaSemana) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sabado')
        break
    default:
        console.log('Opção Inválida')
}

// OU

const diaDaSemana = 11

if(diaDaSemana === 1) {
    console.log('Domingo')
}else if(diaDaSemana === 2) {
    console.log('Segunda')
}else if(diaDaSemana === 3){ 
    console.log('Terça')
}else if(diaDaSemana === 4) {
    console.log('Quarta')
}else if(diaDaSemana === 5){ 
    console.log('Quinta')
}else if(diaDaSemana === 6) {
    console.log('Sexta')
}else if(diaDaSemana === 7){ 
    console.log('Sabado')
}else{
    console.log('Opção Inválida')
}