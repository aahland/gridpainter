let loginClicked = 0;
let finishClicked = 0;
function timesClicked() {
  let data = {};
  loginClicked++;
  if (loginClicked >= 4) {
    data = { bool: true, clicked: loginClicked };
    loginClicked = 0;
  } else {
    data = { bool: false, clicked: loginClicked };
  }

  return data;
}

function finishTimesClicked() {
  finishClicked++;
  if (finishClicked >= 4) {
    finishClicked = 0;
    return true;
  } else {
    return false;
  }
}

module.exports = { timesClicked, finishTimesClicked };
