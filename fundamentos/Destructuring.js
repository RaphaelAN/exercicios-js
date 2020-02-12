// Destructuring1

const pessoa = { 
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1234
    }
}

const {nome, idade} = pessoa 

console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(nome, idade)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)


// aninhado de nao existente nao funciona
// const {conta: {ag}} = pessoa
// console.log(conta, ag, numero)

//------------ DESTRUCTURING2 ARRAY -----------
console.log(`

Destructuring 2, ARRAYS
`)

const [a] = [10]

console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10,7,9,8]

console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]

console.log(nota)

//------------ DESTRUCTURING3 Func -----------
console.log(`

Destructuring 3, Func
`)

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40}))

const obj = {max: 100, min: 0}
console.log(rand(obj))
console.log(rand({}))

//------------ DESTRUCTURING4 Func -----------
console.log(`

Destructuring 4, Func
`)


function rand2([min = 0, max = 1000]){

    if(min > max) [min, max] = [max, min] // inverte as variaveis

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))