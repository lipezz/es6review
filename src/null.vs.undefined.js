let nome        // undefined
let idade = null // intencionalmente sem idade

console.log(nome) // undefined
console.log(idade) // null

console.log( null == undefined )     // true (valor igual)
console.log( null === undefined )   // false (tipo diferente)

let x
console.log(x) // undefined

let y = null
console.log(y) // null

saudacao = (nome) => {
  console.log(nome) // se você não passar nada, será undefined
}

saudacao()