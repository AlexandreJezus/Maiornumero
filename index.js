//Pergunte para o usuário um número, e retorne o maior número possível que
//pode ser feito com os algarismos por ele fornecido

//Use o prompt para interagir com o usuário

const prompt = require("prompt-sync")();
let numeros = +prompt("Digite o número para algarismos.");

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] > numeros[j]) {
      let aux = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = aux;
    }
  }
}

console.log(numeros);
