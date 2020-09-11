const n = Number(prompt("Digite um número:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += 1 / i;
}
console.log(`${sum}`);
