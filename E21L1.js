// 1° passo: ler a quantidade de latas de 350 ml
// 2° passo: ler a quantidade de latas de 600 ml
// 3° passo: ler a quantidade de garrafas de 2 litros
// 4° passo: transformar as latas de 350 ml em litros e multiplicar pela qntd
// 5° passo: transformar as latas de 600 ml em litros e multiplicar pela qntd
// 6° passo: multiplicar a qntd de garrafas por 2 
// 6° passo: somar todos os litros e definir e total
// 7° passo: mostrar quantos litros ele comprou

var qnt3 = 2
var qnt6 = 3
var garr = 2
var cal3 = (qnt3*350)/1000
var cal6 = (qnt6*600)/1000
var calg = garr*2
var calc = calg+cal3+cal6
console.log("Bem vindo a Meia-Cola, você comprou "+calc+" litros de refrigerante.")