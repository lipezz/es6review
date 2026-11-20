var arr = []
arr.push(1,2,3,4)

arr.map((item, index) => {                             // map - percorre o vetor   
    console.log('E O VALOR É: '+item)        
})

const reduce = arr.reduce((current, next) => {         // reduce - consome todo o vetor para tranformar em um unico valor   
    return current + next    
})

const filter = arr.filter(item => {                    // filter - filtra valores com base no boolean apresentado
    return item   
})

const find = arr.find(item => {                        // find - encontra valores com base na lógica apresentada
    return item  
})