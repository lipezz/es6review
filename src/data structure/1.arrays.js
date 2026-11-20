// Nosso array de exemplo
const arr = [1, 2, 3, 4]

// --------------------------- MAP ---------------------------
// map transforma cada item e retorna um NOVO array de mesmo tamanho

console.log("=== MAP EXEMPLO 1: dobrar cada valor ===")
const map1 = arr.map((item) => {      // percorre cada item do array
  return item * 2                     // retorna o novo valor transformado
})
console.log(map1)                     // [2, 4, 6, 8]

console.log("=== MAP EXEMPLO 2: sem return ===")
const map2 = arr.map((item) => {      // sem return → retorna undefined
  console.log("Item:", item)          // imprime, mas não retorna nada
})
console.log(map2)                     // [undefined, undefined, undefined, undefined]

// --------------------------- FILTER ---------------------------
// filter mantém SOMENTE os valores que forem TRUE na condição

console.log("=== FILTER EXEMPLO 1: números pares ===")
const filter1 = arr.filter((item) => {
  return item % 2 === 0               // mantém apenas os pares
})
console.log(filter1)                  // [2, 4]

console.log("=== FILTER EXEMPLO 2: sem return ===")
const filter2 = arr.filter((item) => { // sem return → undefined
  console.log("Item:", item)
})
console.log(filter2)                   // [] → tudo filtrado para fora

// --------------------------- FIND ---------------------------
// find retorna APENAS o PRIMEIRO valor que for TRUE

console.log("=== FIND EXEMPLO 1: primeiro número > 2 ===")
const find1 = arr.find((item) => {
  return item > 2                     // retorna true apenas no 3
})
console.log(find1)                    // 3

console.log("=== FIND EXEMPLO 2: sem return ===")
const find2 = arr.find((item) => {    // undefined → sempre false
  console.log("Item:", item)
})
console.log(find2)                    // undefined → nunca acha nada

// --------------------------- REDUCE ---------------------------
// reduce pega TODOS os elementos e reduz a um ÚNICO valor

console.log("=== REDUCE EXEMPLO 1: somar todos ===")
const reduce1 = arr.reduce((acc, item) => {
  return acc + item                   // soma acumulada
}, 0)                                 // valor inicial do acumulador
console.log(reduce1)                  // 10

console.log("=== REDUCE EXEMPLO 2: sem return (vai dar erro) ===")
try {
  const reduce2 = arr.reduce((acc, item) => {
    console.log("Item:", item)
    // sem return → acc vira undefined na próxima iteração
  })
  console.log(reduce2)
} catch (e) {
  console.log("ERRO:", e.message)     // TypeError: Cannot read properties of undefined
}