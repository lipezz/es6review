/*
Design an algorithm to encode a list of strings to a single string. 
The encoded string is then decoded back to the original list of strings.
Please implement encode and decode
*/

const encode = strs => 
  strs.map(s => `${s.length}:${s}`).join('') // Prefixa cada string com seu tamanho e ':' e junta tudo

const decode = s => {
  const res = []             // Lista para armazenar as strings decodificadas
  let i = 0                  // Posição atual na string codificada

  while (i < s.length) {
    let j = i                // Posição para encontrar o ':'

    while (s[j] !== ':') j++ // Avança até encontrar o delimitador ':'

    const length = parseInt(s.slice(i, j), 10)       // Pega o número antes dos ':' como tamanho
    const str = s.slice(j + 1, j + 1 + length)       // Extrai a string de acordo com o tamanho
    res.push(str)                                    // Adiciona a string à lista
    i = j + 1 + length                               // Move o ponteiro para a próxima posição
  }

  return res 
}

const debug = () => {
   const strs = ["olá", "mundo", "alow"] // Lista original

   const mapped = strs.map(s => s.length) //strs.map(s => `${s.length}:${s}`) // Passo 1: prefixa cada string com tamanho + ':'
   console.log('mapped:', mapped)         // Exibe array resultante do map

   const encoded = mapped.join('')           // Passo 2: junta tudo numa única string sem separador
   console.log('encoded:', encoded)          // Exibe string codificada

   const encoded2 = strs.map(s => `${s.length}:${s}`).join('') // Passo 3: tudo junto em uma linha só
   console.log('encoded2:', encoded2)                          // Exibe string codificada novamente
}

//debug()

const original = ["olá", "mundo", "", "123:456"] // Lista original
const encoded = encode(original)                 // Codifica a lista
const decoded = decode(encoded)                  // Decodifica de volta

console.log("Codificado:", encoded)             // Mostra a string codificada
//console.log("Decodificado:", decoded)           // Mostra a lista original recuperada