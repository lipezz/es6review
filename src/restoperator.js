const usuario = {
    nome:'Luiz',
    cidade:'Warsaw',
    empresa:'Corp'    
}
const {idade, ...x} = usuario
console.log(idade) 
console.log(x)

const array = [1,2,3,4]
const [a, b, ...c] = array
console.log(a)
console.log(b)
console.log(c)

function somaX(a,b,c){
    console.log(a+b+c)
}
somaX(1,2,3)

function somaY(...params){
    console.log(params.reduce((total,next) => total + next))
}
somaY(1,2,3,4)

function somaZ(a, b, ...params){
    console.log(params)
}
somaZ(1,2,3,4,5)

image = 'blabla.png'
const [ name ] = image.split('.')
console.log(name)

function mistery(...params){
    return params
}

console.log(mistery(1,4,"alow",0.7))