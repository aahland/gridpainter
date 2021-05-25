let loginClicked = 2;

function timesClicked(){
    loginClicked++
    if (loginClicked >= 4){
        loginClicked = 0;
        return true;
    } else {
        return false;
    }
}

module.exports = timesClicked;