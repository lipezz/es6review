var startSec = 0
var startMin = 0

var counter = function() {
      
  //document.getElementById("time").textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)
  
  console.log( (startSec < 10) ? ("0" + startSec++) + (' secs') : (startSec++) + (' secs') )
}

setInterval(counter, 1000)

counter()