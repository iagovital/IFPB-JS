let resultado;
const weight = Number(prompt("Digite seu peso:"));
const heigth = Number(prompt("Digite sua altura:"));
var imc = weight / heigth ** 2;

if (imc < 18.5) {
  resultado = "Abaixo do Peso";
} else if (imc > 18.5 && imc <= 24.9) {
  resultado = "Peso Adequado";
} else if (imc > 24.9 && imc <= 29.9) {
  resultado = "Acima do Peso";
} else {
  resultado = "Obesidade";
}
console.log(`IMC:${resultado}`);
