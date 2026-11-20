groupAnagrams = strs => {
   //Given an array of strings strs, group all anagrams together into sublists. 
   //You may return the output in any order.        
   //An anagram is a string that contains the exact same characters as another string, 
   //but the order of the characters can be different.
   const map = new Map()
  
   for (let str of strs) {    // Itera sobre cada string em strs
   
      const sortedStr = str.split('').sort().join('')  // Divide, ordena e junta os caracteres da string

      if (!map.has(sortedStr)) {  // Verifica se a chave já existe no mapa
         map.set(sortedStr, [])  // Se não, define a chave no mapa com um array vazio
      }

      map.get(sortedStr).push(str)  // Adiciona a string original no array da chave
   }

   const ret = Array.from(map.values())  // Retorna os valores do mapa como um array

   console.log(ret)  // Exibe o array com subarrays

   ret.forEach(group => {
      console.log(group)  // Exibe cada subarray individualmente
   })

}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"]
groupAnagrams(strs)