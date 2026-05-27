//5 variáveis para jogador com interpolação
let nomeJogador = "Rafael";
const nickJogo = "Arthur";

const nomeJogo = "Ordem paranormal";
let objetivo = "Ajudar as pessoas";
let recompenca = "Derrotar os espíritos";

console.log(`${nomeJogador} jogou ${nomeJogo} com o personagem ${nickJogo} seu objetivo era ${objetivo} e prentedia ${recompenca}`);

let presenca = 1;
let dado = 20;
let resultado = dado - presenca; 

console.log(`${nomeJogador} jogou um dado e o resultado é ${resultado}.`);

let ponto1 = 300;
let ponto2 = 500;
let totalPontos = ponto1 + ponto2;
console.log(`Você tem ${totalPontos} pontos`);

function verificarPontos (totalPontos) {
    if (totalPontos > 1.000) {
        return "Você subiu de nivel"
    } else {
        return "Você ainda precisa de pontos"
    }
};
console.log(verificarPontos)

let nivel = 7;

