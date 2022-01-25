const cliente = {
    name: "Luana" ,
    idade: 26,
    cpf: "12345678910",
    email: "criis.luana@gmail.com", 
    fones: ["5519994201714", 
    "310653582878"],
    dependentes: [{
        name: "Cristina",
        parentesco:"Mae",
        dataNasc: "09/06/1959" },

     {
        name: "Bianca Borba",
        parentesco: "Amiga",
        dataNasc: "02/04/1993"
     }
    ],
    
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)