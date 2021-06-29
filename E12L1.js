// 1° passo: ler o salário do funcionário
// 2° passo: calcular 15% do salário
// 3° passo: adicionar os 15% ao salário
// 4° passo: calcular 8% do salário com 15% já adicionado
// 5° passo: subtrair 8% do salário com 15% já adicionado
// 6° passo: mostrar o salário inicial, mostrar o salário com aumento, mostrar o salário final.

var salario = 2100
var calc15  = (15 * salario) / 100
var adci15  = (salario+calc15)
var calc8   = (8 * adci15) / 100
var subt8   = (adci15-calc8)
console.log("Salário inicial: "+salario+"\nSalário com aumento: "+adci15+"\nSalário com imposto: "+subt8)