

const socket =io();
//save name in localstorage and get it from localstorage ( after login part must be deleted )

let playerName=localStorage.getItem("playerName")
//make Grid box 
export function makeGridFunc(){
//Make grid 
let i 
for (i=1;i<=15;i++){
    document.getElementById("row1").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for ( i=16;i<=30;i++){
    document.getElementById("row2").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for ( i=31;i<=45;i++){
    document.getElementById("row3").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=46;i<=60;i++){
    document.getElementById("row4").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=61;i<=75;i++){
    document.getElementById("row5").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=76;i<=90;i++){
    document.getElementById("row6").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=91;i<=105;i++){
    document.getElementById("row7").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=106;i<=120;i++){
    document.getElementById("row8").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=121;i<=135;i++){
    document.getElementById("row9").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=136;i<=150;i++){
    document.getElementById("row10").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=151;i<=165;i++){
    document.getElementById("row11").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=166;i<=180;i++){
    document.getElementById("row12").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=181;i<=195;i++){
    document.getElementById("row13").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=196;i<=210;i++){
    document.getElementById("row14").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=211;i<=225;i++){
    document.getElementById("row15").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
}

//showing name of player
export function ShowPlayerName(){
    // localStorage.setItem("playerName", "Sara");
    document.getElementById("playerName").insertAdjacentHTML("afterbegin",`<h2><i class="fas fa-user-edit"></i> ${playerName}</h2>`)
}
//function  coloring the grid 
export function gridColoringFunc(){
   document.getElementById("gridPainter").addEventListener("click", function(evt){
    console.log(evt.target.id);
    let box=evt.target.id;
   
    let playerColor=localStorage.getItem("playerColor")
    let positionColor = {"boxName":box, "boxColor":playerColor};
    console.log(positionColor);
    
    if(document.getElementById(box).style.backgroundColor.match(playerColor)){
        console.log(playerColor);
        let backColor="white";
        console.log(backColor);
        document.getElementById(box).style.backgroundColor=backColor;
        socket.emit("boxColor",{"boxName":box, "boxColor":backColor}); 
    }else{
            document.getElementById(box).style.backgroundColor=playerColor;
            socket.emit("boxColor",positionColor); 
    }   
    fetch("https://gridpainter3.herokuapp.com/users/color", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
    },
    body: JSON.stringify(positionColor)
    })
    .then(res=>res.json())
    .then(paint=>{
    console.log("Status",paint.status);
       
       
    });     
}); 
} 
// reading data from database for other players to see which box is colored and realtime app 

    fetch("https://gridpainter3.herokuapp.com/users")
    .then(res=>res.json())
    .then(boxes=>{
        for(let box in boxes){
                    document.getElementById(boxes[box].boxName).style.backgroundColor=boxes[box].boxColor 
        }
    })   
socket.on("boxColor",function(boxColor){
    console.log("boxColor from socket.io:",boxColor);
    document.getElementById(boxColor.boxName).style.backgroundColor=boxColor.boxColor 
})
socket.on("selectedColor",function(selectedColor){
document.getElementById(selectedColor.color).style.display="none" 
})

// selecting colors on click on color box on top of the page (after login part must be deleted )
// export function setColor(){

//     document.getElementById("color").insertAdjacentHTML("afterbegin",
// `<li id="red" style="background-color:red;"></li>
//  <li id="yellow" style="background-color: yellow;"></li>
//  <li id="blue" style="background-color: blue;"></li>
//  <li id="white" style="background-color:white;"></li>
//  `)
//  document.getElementById("color").addEventListener("click",function(evt){
     
//       let color=evt.target.id ;
//          console.log(color);
//         localStorage.setItem("playerColor", color);
//         let playerColor=localStorage.getItem("playerColor")
//          //console.log(playerColor);
//          document.getElementById("playerColor").innerHTML="";
//          document.getElementById("playerColor").insertAdjacentHTML("afterbegin",`<h1>Player color:</h1><div style="background-color:${playerColor} ; width: 40px; height :40px"> </div>
//          `)
//          socket.emit("selectedColor",{"color":color}); 

//  })
// }



   


