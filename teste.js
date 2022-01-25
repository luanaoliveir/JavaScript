const nome = "Luana";
const idade = 2021 - 1995;
const cidadeDeNascimento = "Catole do Rocha";

const apresentacao = `Meu nome e ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}`
console.log(pedido)



function comParametro(param) {
    console.log(param)
}
comParametro()
