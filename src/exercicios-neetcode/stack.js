// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
// The input string s is valid if and only if every open bracket is closed by the same type of close bracket. 
// Open brackets are closed in the correct order. Every close bracket has a corresponding open bracket of the same type. 
// Return true if s is a valid string, and false otherwise.

const isValid = (s) => {
  const stack = [] // Pilha que vai armazenar os parênteses abertos
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let char of s) {
    console.log('Caractere atual:', char)

    if (map[char]) {
      // Se for um parêntese de abertura, empilha
      stack.push(char)
      console.log('Empilhou:', char, '→ Stack agora:', stack)
    } else {
      // Se for de fechamento, verifica o topo da pilha
      const last = stack.pop()
      console.log('Desempilhou:', last, '→ Stack agora:', stack)

      if (map[last] !== char) {
        console.log(`❌ Erro: esperado '${map[last]}' mas veio '${char}'`)
        return false
      }
    }
  }

  const resultado = stack.length === 0
  console.log('Pilha vazia?', resultado, '→ String é válida:', resultado)
  return resultado
}

isValid("{[()]}")