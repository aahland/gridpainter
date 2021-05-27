// Gets username and color choice and puts into local storage
let socket = io();
export default function login() {
  const btn = document.getElementById("loginBtn");
  //let timesClicked = 0;
  btn.addEventListener("click", () => {
    const playerName = document.getElementById("username").value;
    //timesClicked++;
    //console.log(timesClicked);
    btn.remove();
    document
      .getElementById("waitingText")
      .insertAdjacentHTML(
        "beforebegin",
        "Waiting for other players to join the game before redirecting.."
      );

    localStorage.setItem("playerName", playerName);

    socket.emit("times clicked");
    socket.on("recieveColor", (number) => {
      console.log("Number from server: " + number);
      switch (number) {
        case 1:
          localStorage.setItem("playerColor", "red");
          break;
        case 2:
          localStorage.setItem("playerColor", "green");
          break;
        case 3:
          localStorage.setItem("playerColor", "blue");
          break;
        case 4:
          localStorage.setItem("playerColor", "yellow");
          break;
        default:
          localStorage.setItem("playerColor", "white");
          break;
      }
    });

    //if (timesClicked == 4){
    socket.on("load game", (number) => {
      window.location.href = "../game.html";
      console.log(number);
      const string = `facit${number}`;
      localStorage.setItem("picture", string);
    });

    //}
  });
}
