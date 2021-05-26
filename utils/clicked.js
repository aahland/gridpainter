let loginClicked = 2;
let finishClicked=2;
function timesClicked(){
    loginClicked++
    if (loginClicked >= 4){
        loginClicked = 2;
        return true;
    } else {
        return false;
    }
}
function finishTimesClicked(){
    finishClicked++
    if (finishClicked >= 4){
        finishClicked = 2;
        return true;
    } else {
        return false;
    }
}

module.exports = {timesClicked,finishTimesClicked};