// 1° passo: ler o dia
// 2° passo: ler o mês
// 3° passo: condicionar para o mês ter valor 0 caso seja janeiro
// 4° passo: transformar os meses em dias e somar com os dias do último mês
// 5° passo: condicionar para o total perder 25 dias caso o mês seja dezembro (12)
// 6° passo: mostrar o resultado
var dia = 29
var mes = 1
if ( mes == 1 ) mes = 0
var tra = (mes * 30) + dia
if ( mes == 12) tra = tra - 25
console.log(tra+ " Dias se passaram desde o início do ano")