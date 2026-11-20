var breakText = function(txt, chars) {
  
  let myTxt = Array.from(txt)  

  let newTxt = myTxt[0]

  for (let index = 1; index < myTxt.length; index++) {
    
    //console.log(myTxt[index])
    
    newTxt += myTxt[index]

    if(index===60)
        newTxt += '\n'

  }

  console.log(newTxt)
  console.log('\n')

}

breakText('api/CustomService/resource/v1')


function breakText2(txt) {
  
  console.log('breakText2: txt: '+txt)
  let myArr = txt.split('.')
  
  let newTxt = ''

  for (let index = 0; index < myArr.length; index++) {

    newTxt += myArr[index]
    
    if(index+1 != myArr.length)
      newTxt += '.'
    
    if(index==3)
        newTxt += "\n"
  }

  console.log('breakText2: newTxt: '+newTxt)
  
}

breakText2('service.api.CustService.resource.payment.v3.json')


function parseTest(txt) {

  const newTxt = JSON.parse(txt)
  
  console.log(newTxt.url)
  console.log('\n')

}

parseTest('{    "url": "https://billing-api.fake",    "quota": "5",    "timeout_connection": "1000",    "timeout_read": "30000"}')
