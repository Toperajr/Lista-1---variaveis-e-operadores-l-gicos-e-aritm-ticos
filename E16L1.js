// 1° passo: ler a quantidade de hambúrgueres para fazer
// 2° passo: calcular os quilogramas de queijo multiplicando o peso dos dois queijos (kg) pela qntd de hambúrgueres para fazer 
// 3° passo: calcular os quilogramas do presunto multiplicando o peso da fatia de presunto (kg) pela qntd de hambúrgueres para fazer
// 4° passo: calcular os quilogramas da carne multiplicando o peso dela (kg) pela qntd de hambúrgueres para fazer
// 5° passo: criar 3 variaveis arredondando os valores para 2 casas decimais apenas
// 6° passo: mostrar os quilogramas de cada ingrediente necessários 

var numburguer = 6
var queijo = ((2*50)/1000)*numburguer
var presun = (50/1000)*numburguer
var carnee = (100/1000)*numburguer
var carn = carnee.toFixed(2)
var quei = queijo.toFixed(2)
var pres = presun.toFixed(2)
console.log("Para fazer "+numburguer+ "hambúgureres, precisa de:\n "+quei+"kg de queijo, "+pres+"kg de presunto e "+carn+"kg de carne.")