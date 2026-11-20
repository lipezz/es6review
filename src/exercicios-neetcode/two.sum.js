const twoSum = (nums, target) => {

   //Given an array of integers nums and an integer target
   //return the indices i and j such that nums[i] + nums[j] == target and i != j.

   const map = new Map() // Hashmap to store the number and its index. A hashmap stores key-value pairs, where each key is unique.
        
   let ret = []

   nums.forEach((num, index) => {        // Usando o forEach para iterar pelo array

      const complement = target - num    // Calculando o complemento necessário
     
      if (map.has(complement)) {         // Verificando se o complemento existe no hashmap

         ret.push(map.get(complement))   // Se encontrar o complemento, guarda o indice do complemento 
         
         ret.push(index)                 // Guarda o indice do numero que soma com o complemento
      }

      map.set(num, index)        // Armazenando o valor e o índice no hashmap
   })

   console.log(target)
   console.log(map)
   console.log(ret)

   return ret
 }

twoSum( [12,4,6,8], 20 )
