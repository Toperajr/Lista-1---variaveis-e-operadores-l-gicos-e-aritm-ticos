// 1° passo: ler o total da conta
// 2° passo: calcular a média forçando inteiro (dividir a conta por 3) p/ Carlos 
// 3° passo: calcular a média forçando inteiro (dividir a conta por 3) p/ André
// 4° passo: Calcular a média forçando inteiro e adc o resto da divisão ao resultado (dividir a conta por 3 + resto) p/ Felipe
// 7° passo: mostrar quanto cada um deve pagar
var val = 101.53
var cal = parseInt(val / 3)
var and = parseInt(val / 3)
var fel = parseInt(val / 3) + (val % 3)
console.log("Carlos, tu paga: "+cal+",00. André, tu paga: "+and+",00. Felipe, sinto muito, você paga: "+fel+".")
