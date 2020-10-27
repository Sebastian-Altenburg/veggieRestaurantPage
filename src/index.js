import { initialLoad } from "../modules/initialLoad";
import {showMenuContent} from "/modules/menu";
import {showLocationContent} from "/modules/location";
import {showAboutContent} from "/modules/about";
import {showContactContent} from "/modules/contact";
import {startContent} from "/modules/start";
initialLoad();


let menuButton = document.querySelector(".menuButton").addEventListener("click", ()=> {
    showMenuContent();
});
let locationButton = document.querySelector(".locationButton").addEventListener("click", ()=>{
    showLocationContent();
    
});
let aboutButton = document.querySelector(".aboutButton").addEventListener("click", ()=> {
    showAboutContent();
});
let contactButton = document.querySelector(".contactButton").addEventListener("click", ()=> {
    showContactContent();
});

let imageButton = document.querySelector(".imageButton").addEventListener("click", ()=> {
    startContent();
});

