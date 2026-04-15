const alunos = ["Alice","Sofia","Bella"];

alunos.push("Diego");
alunos.unshift("Lopes");
console.log(alunos);

console.log(alunos.indexOf("Diego")); //Retorna o índice do array
console.log(alunos.indexOf("Paula"));

console.log(alunos.includes("Paula"));
console.log(alunos.includes("Sofia"));