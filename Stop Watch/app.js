// let timerDisplay = document.querySelector('.timer')

let seconds = 0;
let mintues = 0;
let hours = 0;
let days = 0;
let timer = null;


function start() {
  if (timer !== null) {
    return;
  }

  timer = setInterval(run, 1000);
}


function run(){
    seconds++;
    if(seconds==60){
      seconds=0;
      mintues++;
    }
    if(mintues==60){
    mintues=0;
    hours++;
    }
    if(hours==24){
    hours=0
    days++;
    }
     updateDisplay();
}



function updateDisplay() {
  var d = days < 10 ? "0" + days : days;
  var h = hours < 10 ? "0" + hours : hours;
  var m = mintues < 10 ? "0" + mintues : mintues;
  var s = seconds < 10 ? "0" + seconds : seconds;


  document.querySelector('.timer').innerHTML = d + ":" + h + ":" + m + ":" + s;
}


function stop() {
  clearInterval(timer);
  timer = null;

}

function reset() {
  stop();
  seconds = 0;
  mintues = 0;
  hours = 0;
  days = 0;
  updateDisplay();
}




