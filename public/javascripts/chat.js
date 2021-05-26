const socket = io();

function chat(){

let name = localStorage.getItem("playerName");
let color = localStorage.getItem("playerColor");
let chatBox = document.getElementById("chatBox");

let writeMessage = document.createElement("div");
let messageInput = document.createElement("input");
let sendBtn = document.createElement("button");

chatBox.appendChild(writeMessage);
writeMessage.appendChild(messageInput, sendBtn);

let displayChat = document.createElement("div");
let messages = document.createElement("ul");

chatBox.appendChild(displayChat, messages);


}

module.exports = chat;