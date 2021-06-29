// 1° passo: ler x do 1° ponto
// 2° passo: ler y do 1° ponto
// 3° passo: ler x do 2° ponto
// 4° passo: ler y do 2° ponto
// 5° passo: calcular utilizando a fórmula da distância entre dois pontos do plano cartesiano
// 6° passo: segunda parte do calculo
// 7° passo: mostrar o resultado

var x1 = 1
var y1 = 2
var x2 = 4
var y2 = 3
var cal = Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
console.log("a distância entre ("+x1+","+y1+") e ("+y1+","+y2+")"+" é igual a: "+cal)