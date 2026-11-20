var sec = 0
var min = 0

var cronometro = function() {
  
  if(sec < 60)
    sec++

  if(sec === 60){
    sec=0
    min++
  }
  
  console.log((min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec))
}

setInterval(cronometro, 1000)

cronometro()