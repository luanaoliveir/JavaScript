function Cliente(nome, cpf, email, saldo){
    this.nome =nome
    this.cpf =cpf
    this.email =email
    this.saldo =saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const lu = new ClientePoupanca("Lu", "41797815814", "luana@email.com", 100, 200)

console.log(lu)

ClientePoupanca.prototype.depositarPoup = function
(valor){
    this.saldoPoup += valor
}

lu.depositarPoup(50)

console.log(lu.hasOwnProperty("saldoPoup"))
console.log(lu.hasOwnProperty("saldoPoup"))
console.log(lu instanceof Cliente)
console.log(typeof lu)
console.log(typeof lu)
console.log(lu instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)