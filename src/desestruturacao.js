const usuario = {
    nome:'Luiz',
    idade:38,
    endereco:{
        cidade:'Stockholm',
        pais:'Sweden'
    }
};

console.log(usuario.nome);
console.log(usuario['idade'])

const {nome, idade, endereco:{cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome1({nome, idade}){
    console.log(nome, idade);
};
mostraNome1(usuario);

function mostraNome2(usuario){
    console.log({nome, idade});
};
mostraNome2(usuario);