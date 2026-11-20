let stack = []

stack.push(1)    // Adiciona 1 no topo
stack.push(2)    // Adiciona 2 no topo
stack.push(3)    // Adiciona 3 no topo

console.log(stack)      // [1, 2, 3]

const top = stack.pop() // Remove e retorna o topo (3)
console.log(top)        // 3
console.log(stack)      // [1, 2]

stack = []

stack.push('a')  // empilha 'a'
stack.push('b')  // empilha 'b'
console.log(stack)  // ['a', 'b']

const last = stack.pop()  // desempilha 'b'
console.log(last)         // b
console.log(stack)        // ['a']