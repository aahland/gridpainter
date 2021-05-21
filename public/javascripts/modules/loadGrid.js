import { makeGridFunc , ShowPlayerName  ,  gridColoringFunc , setColor} from './grid.mjs';

export default function loadGrid () {
    //Selecting color that must be deleted after login section 
    setColor()

    //make Grid box 
    makeGridFunc();
    //showing name of player

    ShowPlayerName();

    // coloring the grid 
    gridColoringFunc();
}