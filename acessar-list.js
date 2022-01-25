const cliente = {
    name: "Luana",
    idade: 26,
    cpf: "12345678910",
    email: "criis.luana@gmail.com"
}

const chaves = ["name", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))