// 1° passo: ler o número inteiro
// 2° passo: dividir ele por 100 forçando um resultado inteiro (já descobre-se a centena)
// 3° passo: calcular o resto da divisão por 100 e dividir por 10 forçando um resultado inteiro (já descobre-se a dezena)
// 4° passo: calcular o resto da divisão principal do 3° passo (já descobre-se a unidade)
// 5° passo: mostrar o númeiro inteiro e as respectivas casas

var num = 623
var cen = parseInt(num / 100)
var dez = parseInt((num%100) / 10)
var uni = parseInt((num%100) % 10)
console.log("Número: "+num+"\ncentena: "+cen+"\ndezena: "+dez+"\nunidade: "+uni)