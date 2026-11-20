const arr1 = [ 1, 2, 3, 4 ];

const arr2 = [ 5, 6, 7, 8 ];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario = {
    nome:'Luiz',
    cidade:'Warsaw',
    empresa:'Corp'    
};

const usuario2 = {...usuario, nome:'Felipe'};

console.log(usuario2);


var point = [1,3],
  segment = [point, [5,5]],
  triangle = [...segment, [1,8]];
  
console.log(triangle);
