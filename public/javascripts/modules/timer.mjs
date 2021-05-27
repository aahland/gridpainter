export default function timer() {
  let timer = setInterval(countTimer, 1000);
  let totalSeconds = 0;
  function countTimer() {
    ++totalSeconds;

    let minute = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minute * 60;

    if (minute < 10) {
      minute = "0" + minute;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
   
    let timerSlot = document.getElementById("timer");
    timerSlot.innerHTML = minute + ":" + seconds;

    if (timerSlot.innerHTML == "05:00") {
      clearInterval(timer);
      if (timerSlot.style.display != "none") alert("Too slow! GAME OVER!");
    }
  }
}
