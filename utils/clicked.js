let loginClicked = 0;
let finishClicked=0;
function timesClicked(){
    loginClicked++
    if (loginClicked >= 4){
        loginClicked = 0;
        return true;
    } else {
        return false;
    }
}
function finishTimesClicked(){
    finishClicked++
    if (finishClicked >= 4){
        finishClicked = 0;
        return true;
    } else {
        return false;
    }
}

module.exports = {timesClicked,finishTimesClicked};