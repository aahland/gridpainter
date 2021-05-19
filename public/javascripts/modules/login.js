// Gets username and color choice and puts into local storage
export default function login () {
    const btn = document.getElementById('loginBtn');
    btn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        let color = '';
        const radios = document.querySelectorAll('.radioBtn');
        
        for (let radio in radios) {
            if (radios[radio].checked) {
                color = radios[radio].id;
            }
        }

        localStorage.setItem('username', username);
        localStorage.setItem('userColor', color);
    })

    //
    // Redirect to game page
    //
}