import { makeGridFunc ,  gridColoringFunc , facitFunc , pictureShowFunc, deleteGridsColor} from './grid.mjs';
import {buildChat, sendMessage} from './chat.mjs';
import storePlayer from './randomColor.js';
import playersInfo from './playersInfo.mjs';


export default function loadGrid () {
    //Selecting color that must be deleted after login section 
    // setColor()

    // Make facit picture box
    pictureShowFunc();

    // Display info about current players
    playersInfo();

    // Make Grid box 
    makeGridFunc();

    // Coloring the grid 
    gridColoringFunc();

    // Reseting the grid
    deleteGridsColor();

    // Show chat
    buildChat();
    sendMessage();

    //Check the game after click on finish button  
    facitFunc();

    storePlayer();





}