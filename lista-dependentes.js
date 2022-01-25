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
        dataNasc: "09/06/1959"
    }]
}

cliente.dependentes.push({
    name: "Bianca Borba",
    parentesco: "Amiga",
    dataNasc: "02/04/1993"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter
(dependente => dependente.dataNasc==="02/04/1993")

console.log(filhaMaisNova[0].name)