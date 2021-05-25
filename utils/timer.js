function timer(){
    let time = setInterval(countTimer, 1000);
    let totalSeconds = 0;
    function countTimer() {
        ++totalSeconds;

        let minute = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds - (minute*60);

        if(minute < 10){
            minute = "0"+minute;
        };
        if(seconds < 10){
            seconds = "0"+seconds;
        };

        // console.log(minute + ":" + seconds);
        document.getElementById("timer").innerHTML = minute + ":" + seconds;
    }
};

module.exports = timer;