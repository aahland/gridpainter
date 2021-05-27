import {
  makeGridFunc,
  gridColoringFunc,
  facitFunc,
  pictureShowFunc,
  deleteGridsColor,
} from "./grid.mjs";
import { buildChat, sendMessage } from "./chat.mjs";
import timer from "./timer.mjs";

export default function loadGrid() {

 // Make facit picture box
  pictureShowFunc();

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

  //Timer function
  timer();

 
}
