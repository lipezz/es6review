var clock = function() {
  var date = new Date()
  var sec = date.getSeconds()
  var min = date.getMinutes()
  //document.getElementById("time").textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)
  console.log((min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec))
}

setInterval(clock, 1000)

clock()