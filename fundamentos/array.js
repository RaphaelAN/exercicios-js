const valores = [7.7, 3, 5, 33, 2]

console.log(valores[0], valores[3])
console.log(valores[7])

valores[5] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
console.log(valores)

console.log(typeof valores)