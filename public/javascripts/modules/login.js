// Gets username and color choice and puts into local storage
let socket = io();
export default function login () {
    const btn = document.getElementById('loginBtn');
    //let timesClicked = 0;
    btn.addEventListener('click', () => {
        const playerName = document.getElementById('username').value;
        //timesClicked++;
        //console.log(timesClicked);
        btn.remove();


        localStorage.setItem('playerName', playerName);

        socket.emit("times clicked");

        
        //if (timesClicked == 4){
        socket.on("load game", number => {
            window.location.href = '../game.html';
            const string = `facit${number}`;
            localStorage.setItem('picture', string);
        })    
       

        //}

    })
}