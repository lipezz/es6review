const func = () => {

   let ms = []

   ms.push('LF')
   ms.push('TL')
   ms.push('<3')

   ms.push('meu amor')
   ms.push('minha vida')
   ms.push('saudade')

   console.log(ms)

   ms.pop()
   console.log(ms)

   ms.splice(2,2)
   console.log(ms)
} 

func()

// 1. Remover elementos
const arr1 = [1, 2, 3, 4]
arr1.splice(1, 2) // remove 2 elementos a partir do índice 1
// arr vira [1, 4]

// 2. Adicionar elementos
const arr2 = [1, 4]
arr2.splice(1, 0, 2, 3) // não remove nada, adiciona no índice 1
// arr vira [1, 2, 3, 4]

// 3. Substituir elementos
const arr3 = [1, 2, 3]
arr3.splice(1, 1, 99) // remove o elemento do índice 1 e coloca 99
// arr vira [1, 99, 3]

// 4. Pegar o que foi removido
const arr4 = ['a', 'b', 'c', 'd']
const removed = arr4.splice(1, 2)
// removed = ['b', 'c']
// arr = ['a', 'd']