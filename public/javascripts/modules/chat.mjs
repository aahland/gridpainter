const socket =io();

export function buildChat(){

let name = localStorage.getItem("playerName");
let color = localStorage.getItem("playerColor");


let chatBox = document.getElementById("chatBox");
//let chatBoxDynamic = document.createElement("div");



let writeMessage = document.createElement("form");
let messageInput = document.createElement("input");
let sendBtn = document.createElement("button");
writeMessage.id = "writeMessage";
messageInput.id = "messageInput";
messageInput.placeholder = "Write a message";
sendBtn.id = "sendBtn";
sendBtn.innerHTML = "SEND";

chatBox.appendChild(writeMessage);
writeMessage.appendChild(messageInput);
writeMessage.appendChild(sendBtn);

let chatDisplay = document.createElement("div");
let messages = document.createElement("ul");
messages.id = "messages";
chatDisplay.id = "chatDisplay";

chatBox.appendChild(chatDisplay);
chatDisplay.appendChild(messages);



}

export function sendMessage(){
    let writeMessage = document.getElementById("writeMessage");
    let playerName = localStorage.getItem("playerName");
    let playerColor = localStorage.getItem("playerColor");

    writeMessage.addEventListener("submit", function(e){
        e.preventDefault();

        if (messageInput.value, playerName ){
            console.log(messageInput.value);
            socket.emit("chat message", {name: playerName, message: messageInput.value, color: playerColor });
            messageInput.value = "";
        }

        



    })

}
socket.on("chat message", function(msg){
  let messages = document.getElementById("messages");
  
  if ((localStorage.getItem("playerName") === msg.name)&&(localStorage.getItem("playerColor") === msg.color)){ 
    let timestamp = new Date();
    let time = timestamp.getHours() + ":" + timestamp.getMinutes();
    console.log("outgoing message");
    console.log(localStorage.getItem("playerName"), msg);
    messages.insertAdjacentHTML("beforeend", "<li style='margin-right:16vw'>" + msg.name +":"+ time +"<p style='margin-top:0vh'>"+""+msg.message+"</p></li>")
    chatDisplay.scrollTop = chatDisplay.scrollHeight;

  } else if ((localStorage.getItem("playerName") != msg.name) || (localStorage.getItem("playerColor") != msg.color)) {
    let timestamp = new Date();
    let time = timestamp.getHours() + ":" + timestamp.getMinutes();
  console.log("incoming message");
  console.log(localStorage.getItem("playerName"), msg);
  messages.insertAdjacentHTML("beforeend", "<li style='margin-left:16vw'>" + msg.name +":"+ time +"<p style='margin-top:0vh'>"+""+msg.message+"</p></li>")
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
  }
})



