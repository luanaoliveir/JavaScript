class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += saldo
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const luana = new Cliente("Luana", "luana@email.com", "41797815814", 200)


luana.exibirSaldo()

console.log(luana)


function Pessoa(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)

    }
}

const pessoa1 = new Pessoa("Luana", "luana@email.com")
const pessoa2 = new Pessoa("Bianca", "bianca@email.com")

pessoa1.imprimeNomeEmail()
pessoa2.imprimeNomeEmail()


//CALL

// function imprimeNomeEmail(tipoCliente){
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
// }

// const cliente1 = {
//     nome: "Luana",
//     email: "lu@email.com"
// }

// const cliente2 = {
//     nome: "Bia",
//     email: "bia@email.com"
// }

// imprimeNomeEmail.call(cliente1, "cliente especial")
// imprimeNomeEmail.call(cliente2, "cliente estudante")


//APPLY

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
    ${tipoCliente} da agencia ${agencia}: 
    - nome: ${this.nome}, email: ${this.email}
    `)
}

const cliente1 = {
    nome: "Luana", 
    email: "lu@email.com"
}

const cliente2 = {
    nome: "Bianca",
    email: "bia@email.com"
}

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "New York"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
imprimeNomeEmail.apply(cliente2, clienteEstudante)


//BIND

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
        return ` a personagem e ${this.nome}`
    }
}

const personagemGenerico = personagem.apresentar

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())