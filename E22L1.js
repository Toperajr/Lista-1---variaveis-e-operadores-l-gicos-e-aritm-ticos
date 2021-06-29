// 1° passo: ler a quantidade de moedas de 1 centavo
// 2° passo: ler a quantidade de moedas de 5 centavos 
// 3° passo: ler a quantidade de moedas de 10 centavos  
// 4° passo: ler a quantidade de moedas de 25 centavos 
// 5° passo: ler a quantidade de moedas de 50 centavos 
// 6° passo: ler a quantidade de moedas de 1 real
// 7° passo: transformar as moedas de 1 real em centavos, multiplicar a qntd de cada tipo de moeda por seu determinado valor e somar todas as moedas
// 8° passo: tranformar o total de centavos em reais
// 9° passo: mostrar quantos reais Pedrinho economizou

var qntd1 = 0
var qntd5 = 0
var qntd10 = 5
var qntd25 = 1
var qntd50 = 2
var qntd1r = 4
var calcul = (qntd1r*100)+(qntd50*50)+(qntd25*25)+(qntd10*10)+(qntd5*2)+(qntd1*1)
var calculo = calcul/100
console.log("Pedrinho tem "+calculo+" reais.")