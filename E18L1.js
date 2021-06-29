// 1° passo: ler o total de horas trabalhadas
// 2° passo: ler o total de horas extras
// 3° passo: multiplicar o total de horas trabalhadas por 10
// 4° passo: multipliar o total de horas extras por 15
// 5° passo: somar o total ganho e definir o salário bruto
// 6° passo: tirar 10% do total ganho e definir o salário liquido

var horat = 44
var horae = 2
var hort = horat*10
var hore = horae*15
var brut = hort+hore
var liqu = brut-(brut/10)
console.log("O salário bruto deste individuo é "+brut+" reais e o salário liquido dele é "+liqu+" reais.")
