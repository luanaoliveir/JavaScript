const cliente = {
    name: "Luana" ,
    idade: 26,
    cpf: "12345678910",
    email: "criis.luana@gmail.com", 
    fones: ["5519994201714", "310653582878"]
}

cliente.dependentes = {
    nome: "Cristina",
    parentesco:"Mae",
    dataNasc: "09/06/1959"
}

console.log(cliente)

cliente.dependentes.nome = "Cristina Conceicao"

console.log(cliente)