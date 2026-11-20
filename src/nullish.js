const saudacao = (nome) => {
  const nomeFinal = nome ?? 'Visitante'  // Ele retorna o valor à direita apenas se o valor à esquerda for null ou undefined
  console.log(`Olá, ${nomeFinal}!`)
}

// Exemplos:
saudacao('Maria')       // Olá, Maria!
saudacao(null)          // Olá, Visitante!
saudacao(undefined)     // Olá, Visitante!
saudacao('')            // Olá, !
saudacao(1)
saudacao(true)
