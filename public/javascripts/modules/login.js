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
        socket.on("load game", data => {
            window.location.href = '../game.html';
            const string = `facit${data.number}`;
            localStorage.setItem('picture', string);
            switch (data.colorNumber) {
                case 1:
                    localStorage.setItem('color', 'red');
                    break;
                case 2:
                    localStorage.setItem('color', 'green');
                    break;
                case 3:
                    localStorage.setItem('color', 'blue');
                    break;
                case 4:
                    localStorage.setItem('color', 'yellow');
                    break;
                default:
                    localStorage.setItem('color', 'white');
                    break;
            }
        })    
       

        //}

    })
}