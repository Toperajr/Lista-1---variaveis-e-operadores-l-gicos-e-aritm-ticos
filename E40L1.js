// 1° passo: ler o cateto oposto
// 2° passo: ler o cateto adjacente
// 3° passo: calcular a raiz da soma do quadrado dos catetos (vulgo hipotenusa)
// 4° passo: mostrar o resultado (hipotenusa)

var catopo = 2
var catadj = 6
var hipqua = Math.sqrt((catopo * catopo) + (catadj * catadj))
console.log("O valor da hipotenusa é: " + hipqua)