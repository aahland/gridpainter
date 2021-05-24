// Gets username and color choice and puts into local storage
let socket = io();
export default function login () {
    const btn = document.getElementById('loginBtn');
    //let timesClicked = 0;
    btn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        //timesClicked++;
        //console.log(timesClicked);
        btn.remove();


        localStorage.setItem('playerName', username);

        socket.emit("times clicked", "clicked");

        
        //if (timesClicked == 4){
        socket.on("load game", number => {
            window.location.href = '../game.html';
            const string = `facit${number}`;
            localStorage.setItem('picture', string);
        })    
       

        //}

    })
}