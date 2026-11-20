isAnagram = (s, t)=> {
  
   if (s.length !== t.length) 
      return false                         //Se os tamanhos forem diferentes, não podem ser anagramas
   
   const freqMap = {}                      //Criamos um objeto para contar a frequência dos caracteres em s
   
   for (let char1 of s) {                  //Percorrendo a string s
      
      if (!freqMap[char1])                 //Se nao tem o caracter no mapa inicia a contagem 
         freqMap[char1] = 1                  
       else 
         freqMap[char1]++                  //Se ja tem incrementa a contagem
   }
   
   for (let char2 of t) {                  //Percorrendo a string t
      
      if (freqMap[char2])                  //Se tem o caractere no mapa, decrementa a contagem 
         freqMap[char2]--
      else                                
         return false                      //Se nao tem nao e anagrama   
   }

   return true                             //Se passamos por todos sem problemas, é anagrama
}
    
console.log(isAnagram('top','pot'))
