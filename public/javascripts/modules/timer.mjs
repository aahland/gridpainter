import finishTimesClicked from './utils/clicked.js';
//const finishTimesClicked = require("./utils/clicked.js");




export default function timer(){
    
    let timer = setInterval(countTimer, 1000);
    let totalSeconds = 0;
    function countTimer() {
        const finishDone = finishTimesClicked();
        ++totalSeconds;

        let minute = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds - (minute*60);

        if(minute < 10){
            minute = "0"+minute;
        };
        if(seconds < 10){
            seconds = "0"+seconds;
        }


        // console.log(minute + ":" + seconds);
        let timerSlot = document.getElementById("timer");
        timerSlot.innerHTML = minute + ":" + seconds;
        
        if ((timerSlot.innerHTML == "00:20")&&(finishDone == false)) {
            clearInterval(timer);
            alert ("Too slow! GAME OVER!")
        }
    
        
    }
};