function Cliente(nome, cpf, email, saldo){
    this.nome =nome
    this.cpf =cpf
    this.email =email
    this.saldo =saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const luana = new Cliente("Luana", "123456789", "luana@email", 100)

console.log(luana)