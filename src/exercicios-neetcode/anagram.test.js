isAnagram = (s)=> {
        
   const freqMap = {}                      //Criamos um objeto para contar a frequência dos caracteres em s
   
   for (let char1 of s) {                  //Percorrendo a string s
      
      if (!freqMap[char1])                 //Se nao tem o caracter no mapa inicia a contagem 
         freqMap[char1] = 1                  
       else 
         freqMap[char1]++                  //Se ja tem incrementa a contagem
   }
   
   return freqMap                         
}
    
console.log(isAnagram('tremendous'))

iterateString = s => {

   for (let char of s)
      console.log(char)
}

iterateString('tremendous')