arrayEquals = (a, b) => {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

isCwpFromUri = (uri,cwp) => {

  let paramsUri = uri.split('/')
  let paramsCwp = cwp.split('.')
  let paramsCwp2 = []

  paramsUri.splice(0,1)

  paramsCwp.map((item, index) => {  

  if(item != 'gateway' && 
     item != 'servico' && 
     item != 'microservico' && 
     item != '*' && 
     item != 'json'
  )
     
    paramsCwp2.push(item)  
     
  })

  return arrayEquals(paramsUri, paramsCwp2)
}

const uri = '/api/fake/v1/callback'
const cwp = 'gateway.api.fake.v1.notificacao.callback.json'

const uri2 = '/api/document/v2/*'
const cwp2 = 'microservice.api.document.v2.*.json'

console.log(isCwpFromUri(uri,cwp))
console.log(isCwpFromUri(uri2,cwp2))