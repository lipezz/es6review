const go = (values:number[]):void => {

   for (const v of values) {
      console.log(`\nValor: ${v}`)
      console.log(`round: ${Math.round(v)}`) // arredonda
      console.log(`floor: ${Math.floor(v)}`) // vai para baixo (mais negativo)
      console.log(`ceil : ${Math.ceil(v)}`)  // vai para cima (mais positivo)
      console.log(`trunc: ${Math.trunc(v)}`) // corta sem arredondar
   }
}

const values = [5.9, 5.1, 5.5, 5.0001, -5.9, -5.1, -5.5, -5.0001]

go(values)