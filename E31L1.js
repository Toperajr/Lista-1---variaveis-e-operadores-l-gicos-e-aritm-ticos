// 1° passo: ler o peso da pessoa
// 2° passo: calcular 15% do peso e somar ao peso anterior
// 3° passo: calcular 20% do peso e subtrair do peso anterior
// 4° passo: mostrar  os resultados do 2° e 3° passo

var pes = 50
var p15 = ((pes * 15)/100)+pes
var p20 = pes-((pes* 20)/100)
console.log("Caso tu engorde 15% do seu peso, ficará com: "+p15+" kg. Caso emagreça 20% do seu peso, ficará com: "+p20+" kg.")