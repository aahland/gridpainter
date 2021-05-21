import { makeGridFunc , ShowPlayerName  ,  gridColoringFunc } from './grid.mjs';
import {buildChat, sendMessage} from './chat.mjs';

export default function loadGrid () {
    //Selecting color that must be deleted after login section 
    // setColor()

    //make Grid box 
    makeGridFunc();
    //showing name of player

    ShowPlayerName();

    // coloring the grid 
    gridColoringFunc();

    buildChat();
    sendMessage();


}