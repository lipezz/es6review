const splitSortJoin = strx => {
   let str = 'smashintopieces'         // Define a string de entrada
   let strs = str.split('')              // Divide a string em um array de caracteres
   let strsordered = [...strs].sort()  // Cria uma cópia do array e ordena os caracteres
   let strback = strsordered.join('')  // Junta os caracteres ordenados de volta em uma string
   console.log(str)                    // Exibe a string original
   console.log(strs)                   // Exibe o array de caracteres original
   console.log(strsordered)            // Exibe o array de caracteres ordenado
   console.log(strback)                // Exibe a string ordenada
}


splitSortJoin()