import { generateLogin } from "./pages/Login.js";
import { generatebeforefooter } from './pages/beforefooter.js';
import { generatemain } from "./pages/main.js";
import { generatemainfooter } from "./pages/mainfooter.js";
import {generatesingup} from "./pages/Signup.js";
import {generatesingupfunctions} from "./pages/Signupfunctions.js";

const loginButton = document.getElementById("login");
const mainButton = document.getElementById("main");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container1part2");
const beforefooter = document.querySelector(".beforefooter");
const footer=document.querySelector(".footer");
const signup=document.getElementById("signup");
signup.addEventListener("click",()=>{
    container.innerHTML = "";
    container2.innerHTML = "";
    footer.innerHTML="";
    beforefooter.style.visibility = 'hidden';
    container.innerHTML = generatesingup(); 
    generatesingupfunctions();
    document.body.style.background = "url('./images/arcane2_desktop_default_2x.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    
});

//LOGin buttons&inputs
//function to verify that the user didnt enter a blank username&password;

function updateButtonSignIn(user,password,singinbutton) {

    if (user.value.length !== 0 && password.value.length !== 0) {
       
        singinbutton.style.cursor = 'pointer';
        singinbutton.removeAttribute('disabled');
    }};



// Event listener for champion icons
function reattachEventListeners() {
    const fighter = document.getElementById("fighter");
    const champ_change = document.querySelector(".champ-change");
    const champion_name = document.getElementById("champion-name");
    const knownfor = document.getElementById("knownfor");
    const insideBlock = document.querySelector('.insideblock');
    const assasin = document.getElementById("assasin");
    const mage = document.getElementById("mage");
    const marksmen = document.getElementById("marksmen");
    const tank = document.getElementById("tank");
    const support = document.getElementById("support");

    fighter.addEventListener("click", () => {
        champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=736";
        champion_name.innerHTML = `YASUO`;
        knownfor.innerHTML = `The Unforgiven`;
        insideBlock.style.left = '46%'; 
    });

    assasin.addEventListener("click", () => {
        champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&amp;fit=fill&amp;q=80&amp;w=736";
        champion_name.innerHTML = `AKALI`;
        knownfor.innerHTML = `The Rogue Assassin`;
        insideBlock.style.left = '46%'; 
    });

    mage.addEventListener("click", () => {
        champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=736";
        champion_name.innerHTML = `LUX`;
        knownfor.innerHTML = `The Lady of Luminosity`;
        insideBlock.style.left = '40%'; 
        insideBlock.style.top = '97%'; 
    });

    marksmen.addEventListener("click", () => {
        champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=1312";
        champion_name.innerHTML = `JINX`;
        knownfor.innerHTML = `The Loose Cannon`;
        insideBlock.style.left = '46%'; 
    });

    tank.addEventListener("click", () => {
        champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=1312";
        champion_name.innerHTML = `LEONA`;
        knownfor.innerHTML = `The Radiant Dawn`;
        insideBlock.style.left = '46%'; 
    });

    support.addEventListener("click", () => {
        champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=1312";
        champion_name.innerHTML = `THRESH`;
        knownfor.innerHTML = `The Chain Warden`;
        insideBlock.style.left = '46%'; 
    });
}


mainButton.addEventListener("click", () => {
    container.innerHTML = generatemain();
    container2.innerHTML = `
    <div class="videocontainer">
        <video autoplay muted loop>
            <source  class="img-fluid" src="images/Test.mp4" type="video/mp4">
        </video>
        <div class="container1text">
            <div><h1 class="container1texth1">JOIN US  DONT WASTE MORE TIME</h1></div>
            <div><h5 class="container1texth5">Enter the League of Legends battleground, where every champion has a story and every match is a new adventure. Choose your role, master your skills, and rise to the challenge. The Rift awaits</h5></div>
            <button type="button" class="btn btn-primary btn-lg" id="buttonsign">Sign up</button>
        </div>
    </div>
    `;

    beforefooter.style.visibility = 'visible';
    beforefooter.innerHTML = generatebeforefooter();
    document.body.style.background = "url('./images/EaUnExCU8AAalKe.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    reattachEventListeners();
    const signin2 = document.getElementById("buttonsign");
    signin2.addEventListener("click", () => {
        container.innerHTML = "";
        container2.innerHTML = "";
        container.innerHTML = generateLogin(); 
        footer.innerHTML="";
        beforefooter.style.visibility = 'hidden';
        document.body.style.background = "url('./images/arcane2_desktop_default_2x.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        const user = document.getElementById("user");
        const password = document.getElementById("password");
        const singinbutton=document.getElementById("submitbuttonsingin");
        user.addEventListener("blur", () => updateButtonSignIn(user, password, singinbutton));
        password.addEventListener("blur", () => updateButtonSignIn(user, password, singinbutton));
        
        });
    footer.innerHTML=generatemainfooter();

});


loginButton.addEventListener("click", () => {
    container.innerHTML = "";
    container2.innerHTML = "";
    footer.innerHTML="";
    beforefooter.style.visibility = 'hidden';
    container.innerHTML = generateLogin(); 
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const singinbutton=document.getElementById("submitbuttonsingin");
    document.body.style.background = "url('./images/arcane2_desktop_default_2x.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    user.addEventListener("blur", () => updateButtonSignIn(user, password, singinbutton));
    password.addEventListener("blur", () => updateButtonSignIn(user, password, singinbutton));

    
    
});

window.onload = () => {
    container.innerHTML = generatemain();
    container2.innerHTML = `
    <div class="videocontainer">
        <video autoplay muted loop>
            <source  class="img-fluid" src="images/Test.mp4" type="video/mp4">
        </video>
        <div class="container1text">
            <div><h1 class="container1texth1">JOIN US  DONT WASTE MORE TIME</h1></div>
            <div><h5 class="container1texth5">Enter the League of Legends battleground, where every champion has a story and every match is a new adventure. Choose your role, master your skills, and rise to the challenge. The Rift awaits</h5></div>
            <button type="button" class="btn btn-primary btn-lg" id="buttonsign">Sign up</button>
        </div>
    </div>
    `;
    beforefooter.innerHTML=generatebeforefooter();
    beforefooter.style.visibility = 'visible';
    footer.innerHTML=generatemainfooter();

    // Reattach event listeners when page loads
    reattachEventListeners();

    const signin2 = document.getElementById("buttonsign");
    signin2.addEventListener("click", () => {

    container.innerHTML = "";
    container2.innerHTML = "";
    footer.innerHTML="";
    beforefooter.style.visibility = 'hidden';
    container.innerHTML = generateLogin(); 
    
    document.body.style.background = "url('./images/arcane2_desktop_default_2x.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const singinbutton=document.getElementById("submitbuttonsingin");
    user.addEventListener("blur", () => updateButtonSignIn(user, password, singinbutton));
    password.addEventListener("blur", () => updateButtonSignIn(user, password, singinbutton));


    });
    
    
    
};
/* header svg music icon chage + music play*/
const svgElement = document.getElementById('music-icon');
    const audioElement = document.getElementById('audio');

    svgElement.addEventListener("click", () => {
        if (audioElement.paused) {
            // Play the audio
            audioElement.play();
            // Change the icon to the pause one
            svgElement.innerHTML = `
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                <path d="M16 9a5 5 0 0 1 0 6"></path>
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                
            `;
            svgElement.style.stroke='yellow';
        } else {
            // Pause the audio
            audioElement.pause();
            // Change the icon back to the volume icon
            svgElement.innerHTML = `
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                <line x1="22" x2="16" y1="9" y2="15"></line>
                <line x1="16" x2="22" y1="9" y2="15"></line>
            `;
            svgElement.style.stroke='red';

        }
    });

        