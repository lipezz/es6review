sort1 = () => {
   const nums = [5, 2, 9, 1]
   nums.sort((a, b) => a - b)  // Crescente
   console.log(nums)  // [1, 2, 5, 9]
}

sort2 = () => {
   const nums = [5, 2, 9, 1]
   nums.sort((a, b) => b - a)  // Decrescente
   console.log(nums)  // [9, 5, 2, 1]
}

sort3 = () => {
   const nomes = ['joão', 'ana', 'beatriz']
   nomes.sort()  // Ordem alfabética padrão
   console.log(nomes)  // ['ana', 'beatriz', 'joão']
}

sort4 = () => {
   const pessoas = [
      { nome: 'Ana', idade: 30 },
      { nome: 'Carlos', idade: 25 },
      { nome: 'Beatriz', idade: 35 }
   ]
   pessoas.sort((a, b) => a.idade - b.idade)  // Crescente por idade
   console.log(pessoas.map(p => p.nome))  // ['Carlos', 'Ana', 'Beatriz']
}

sort5 = () => {
   const contagem = new Map([
      ['apple', 4],
      ['banana', 7],
      ['orange', 2]
   ])
   const ordenado = Array.from(contagem.entries()).sort((a, b) => b[1] - a[1])  // Ordena por valor (frequência) decrescente
   console.log(ordenado)
}

sort1() 
sort2()
sort3()
sort4()
sort5()