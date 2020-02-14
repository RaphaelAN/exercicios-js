function getRandInt (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getRandInt(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Final')