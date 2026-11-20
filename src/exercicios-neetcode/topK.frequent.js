const topKFrequent = (nums, k) => {

   const contagem = new Map() // Criar um Map para contar as frequências

   for (let numero of nums) {
      if (contagem.has(numero)) {
         contagem.set(numero, contagem.get(numero) + 1) // Se já existe, soma 1
      } else {
         contagem.set(numero, 1) // Se não existe, começa com 1
      }
   }

   const listaOrdenada = Array.from(contagem.entries()).sort((a, b) => b[1] - a[1]) // Ordenar por frequência (maior primeiro)

   const resultado = [] // Lista para guardar os k mais frequentes

   for (let i = 0; i < k; i++) {
         resultado.push(listaOrdenada[i][0]) // Pegar só o número (índice 0 do par)
   }

   return resultado // Retornar os k mais frequentes
}
  
//console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)) // [3, 2] ou [2, 3]
//console.log(topKFrequent([7, 7], 1)) // [7]
console.log(topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2)) // [4,3,2]

const criaMap = (nums) => {
   const myMap = new Map()

   myMap.set('a', 1)
   myMap.set('b', 2)
   myMap.set('c', 3)
   
   // Get value by key
   console.log(myMap.get('c')) 
}

//mostraMap() 