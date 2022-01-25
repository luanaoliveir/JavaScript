const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => 
atual + acum, 0) /notas.length

console.log(media)