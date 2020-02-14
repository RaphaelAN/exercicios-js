const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let nota in notas){
    console.log(notas[nota])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 37,
    peso: 75
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}