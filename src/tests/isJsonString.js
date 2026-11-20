const isJsonString = str => {
      
    if(!isNaN(str))
      return false
   
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
  }

function tryParseJSONObject (jsonString){
    try {
        var o = JSON.parse(jsonString)

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return true
        }
    }
    catch (e) { }

    return false
}

const myJson = {
    "url": "http://ocs.fake/Gestao/ConsultarDadosCliente/v1.0/REST",
    "quota": "1079",
    "timeout_connection": "500",
    "timeout_read": "2000"
}

console.log(isJsonString(myJson))

console.log(tryParseJSONObject(myJson))

console.log(new String(myJson).indexOf('{') > -1)

console.log(JSON.stringify(myJson))

console.log( (JSON.stringify(myJson).indexOf('{') > -1) && (JSON.stringify(myJson).indexOf('}') > -1) )