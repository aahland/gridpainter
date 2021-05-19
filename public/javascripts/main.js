import { makeGridFunc , ShowPlayerName  ,  gridColoringFunc , setColor} from './modules/grid.mjs';
import {buildChat, sendMessage } from './modules/chat.mjs';

//Selecting color that must be deleted after login section 
setColor()

//make Grid box 
makeGridFunc();
//showing name of player

ShowPlayerName();

// coloring the grid 
gridColoringFunc();

//building the chat elements
buildChat();

//function for sending message
sendMessage();