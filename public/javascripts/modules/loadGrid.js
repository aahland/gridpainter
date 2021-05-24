import { makeGridFunc ,  gridColoringFunc , facitFunc , pictureShowFunc, deleteGridsColor} from './grid.mjs';
import {buildChat, sendMessage} from './chat.mjs';
import storePlayer from './randomColor.js';

export default function loadGrid () {
    //Selecting color that must be deleted after login section 
    // setColor()
     //  Make facit picture box
   pictureShowFunc()
    //make Grid box 
    makeGridFunc();

    // coloring the grid 
    gridColoringFunc();
//reseting the grid
deleteGridsColor();
    buildChat();
    sendMessage();

//check the game after click on finish button  
facitFunc()


    storePlayer();

}