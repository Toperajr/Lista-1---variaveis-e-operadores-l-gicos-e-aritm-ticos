// 1° passo: ler a quantidade de dias sem acidentes
// 2° passo: converter o total de dias para anos
// 3° passo: calcular a sobra de anos
// 4° passo: converter a sobra de anos para meses
// 5° passo: calcular a sobra de meses
// 6° passo: converter a sobra de meses para dias
// 7° passo: mostrar o total de anos, meses e dias sem acidentes

var dias = 543
var anos = parseInt(dias / 365)
var sobrano = dias % 365
var mes = parseInt(sobrano / 30)
var sobrame = (sobrano % 30)
var dia = sobrame //sim descobri que essa linha é meio inutil kkkkkk
console.log("Atenção todos da empresa, nós estamos há "+anos+" ano(s), "+mes+" mês(s) e "+dia+" dia(S) sem acidentes.")
