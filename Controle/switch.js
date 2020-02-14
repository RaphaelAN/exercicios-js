const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Recuperacao')
            break
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida!!')
    }
}

imprimirResultado(9)
imprimirResultado(7.5)
imprimirResultado(6.5)
imprimirResultado(3.3)
imprimirResultado(-1)
imprimirResultado(11)