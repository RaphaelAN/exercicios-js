let isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // como a tipagem eh fraca 1 vira number

isAtivo = 1 
console.log(!!isAtivo) //o operadorlogico ! muda o tipo para bool de novo

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log('' || null || 123 || 'epa') //retorna o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') //default
