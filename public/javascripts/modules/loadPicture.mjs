export async function fetchPicture () {
    let i = Math.floor(Math.random()*5) + 1;
    let url = `https://gridpainter3.herokuapp.com/users/facit${i}`;
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }

    });
    return await response.json()
};