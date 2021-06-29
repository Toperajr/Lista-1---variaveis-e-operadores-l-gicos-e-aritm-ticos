// 1° passo: ler o ano de nascimento
// 2° passo: ler o ano atual
// 3° passo: calcular a idade em anos (subtrair o ano de nascimento do ano atual)
// 4° passo: calcular a idade em meses (multiplicar a idade por 30)
// 5° passo: calcular a idade em dias (multiplicar a idade por 365)
// 6° passo: calcular a idade em semanas (multiplicar por 52)
// 7° passo: mostrar a idade da pessoa em anos, meses, semanas e dias

var anonasc = 2005
var anoatua = 2021
var idade = anoatua-anonasc
var mes = idade*12
var dia =  idade*365
var sem = idade*52
console.log("Esta pessoa tem "+idade+" anos anos de idade, "+mes+" meses em idade, "+sem+" semanas e "+dia+" dias em idade")