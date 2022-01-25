const clientes = [
{
    name: "Luana" ,
    idade: 26,
    cpf: "12345678910",
    dependentes: [{
        name: "Cristina",
        parentesco:"Mae",
        dataNasc: "09/06/1959",
    }]
},
{
    name: "Bianca",
    cpf: "258963215",
    dependentes: [{
        name: "Shopia",
        parentesco: "Filha",
        dataNasc: "14/03/2020"
    }],

}
]

const listaDependentes = [...clientes[0].dependentes,
...clientes[1].dependentes]

console.table(listaDependentes)