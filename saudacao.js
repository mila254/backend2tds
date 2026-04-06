//Declaração da função com parâmetro
function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo," + nomeJogador +"!" )
};

saudacao("Alex");

//Função que recebe um valor, soma 1 número e retorna
function subirDeNivel(nivelAtual) {
    return nivelAtual + 1;
}

let meuNivel = 10

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nivel atualizado é:" + nivelAtualizado);

//Função que soma dois números
function soma(numero1, numero2) {
    return numero1 * numero2
};

console.log(soma(5,3));
