const socket = io();

async function getPlayers() {
  let url = "https://gridpainter3.herokuapp.com/playerNames";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}
