const socket =io();
//Make grid 
for (i=1;i<=15;i++){
    document.getElementById("row1").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=16;i<=30;i++){
    document.getElementById("row2").insertAdjacentHTML("beforeend",`<div id=box${i}>${i}<div>`)
}
for (i=31;i<=45;i++){
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
//function  coloring the grid  
document.getElementById("gridPainter").addEventListener("click", function(evt){
    console.log(evt.target.id);
    let box=evt.target.id;
   
    let playerColor=localStorage.getItem("playerColor")
    let positionColor = {"id":box, "paint":playerColor};
    console.log(positionColor);
    //document.getElementById(box).style.backgroundColor="blue"
    if(document.getElementById(box).style.backgroundColor.match(playerColor)){
        console.log(playerColor);
        let backColor="white";
        console.log(backColor);
        document.getElementById(box).style.backgroundColor=backColor;
        socket.emit("boxColor",{"id":box, "paint":backColor}); 
    }else{
            document.getElementById(box).style.backgroundColor=playerColor;
            socket.emit("boxColor",positionColor); 
    }        
});
// Receive data  
 socket.on("boxColor",function(boxColor){
     console.log(boxColor);
     document.getElementById(boxColor.id).style.backgroundColor=boxColor.paint
 })

// Color box for selecting colors
document.getElementById("color").insertAdjacentHTML("afterbegin",
   `<li id="red" style="background-color: red;"></li>
    <li id="yellow" style="background-color: yellow;"></li>
    <li id="blue" style="background-color: blue;"></li>`)

// selecting colors on click on color box on top of the page 
document.getElementById("color").addEventListener("click",function(evt){
    color=evt.target.id ;
        console.log(evt.target.id);
        localStorage.setItem("playerColor", color);
})


