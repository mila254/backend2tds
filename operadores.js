const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

//Operador E
const podeDirigir = maiorDeIdade && possuiCNH;
console.log("Pode dirigir?" + podeDirigir);

//Operador OU
const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log("Pode viajar sozinho?" + podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log("Preciso de acompanhante?" + precisaDeAcompanhante);