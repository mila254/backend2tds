//Lista ordenadas de Valores
const frutas = ["Maçã","Banana","uva","Laranja"];
//Ìndice=         0       1       2      3

console.log(frutas[0]);
console.log(frutas[3]);
//console.log(frutas.length);// Faz a contagem dos elementos dentro do array

frutas[1] = "Morango";
console.log(frutas);

frutas.push("Pêssego");
frutas.unshift("Abacate");
frutas.unshift("Abacaxi");
console.log(frutas);
console.log(frutas.length)