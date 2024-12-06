import { generateLogin } from "./pages/Login.js";
import { generatemain } from "./pages/main.js";

const loginButton = document.getElementById("login");
const mainButton = document.getElementById("main");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container1part2");
const fighter=document.getElementById("fighter");
const champ_change=document.querySelector(".champ-change");
const champion_name=document.getElementById("champion-name");
const knownfor=document.getElementById("knownfor");
const insideBlock = document.querySelector('.insideblock');
const marksmen=document.getElementById("marksmen");
const support=document.getElementById("support");
const tank=document.getElementById("tank");
fighter.addEventListener("click",()=>{
    champ_change.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=736";
    champion_name.innerHTML=`YASUO`;
    knownfor.innerHTML=`The Unforgiven`;
    insideBlock.style.left = '46%'; 
});
const assasin=document.getElementById("assasin");
assasin.addEventListener("click",()=>{
    champ_change.src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&amp;fit=fill&amp;q=80&amp;w=736";
    champion_name.innerHTML=`AKALI`;
    knownfor.innerHTML=`The Rogue Assassin`;
    insideBlock.style.left = '46%'; 
    
});
const mage=document.getElementById("mage");
mage.addEventListener("click",()=>{
    champ_change.src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=736";
    champion_name.innerHTML=`LUX`;
    knownfor.innerHTML=`The Lady of Luminosity`;
    insideBlock.style.left = '40%'; 
    insideBlock.style.top = '97%'; 

});

marksmen.addEventListener("click",()=>{
    champ_change.src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=1312";
    champion_name.innerHTML=`JINX`;
    knownfor.innerHTML=`The Loose Cannon`;
    insideBlock.style.left = '46%'; 
});
tank.addEventListener("click",()=>{
    champ_change.src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=1312";
    champion_name.innerHTML=`LEONA`;
    knownfor.innerHTML=`The Radiant Dawn`;
    insideBlock.style.left = '46%'; 
    
});
support.addEventListener("click",()=>{
    champ_change.src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=1312";
    champion_name.innerHTML=`THRESH`;
    knownfor.innerHTML=`The Chain Warden`;
    insideBlock.style.left = '46%'; 
})

loginButton.addEventListener("click", () => {
    container.innerHTML = "";
    container2.innerHTML = "";
    container.innerHTML = generateLogin(); 
    document.body.style.background = "url('./images/login.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});

mainButton.addEventListener("click", () => {
    container.innerHTML = generatemain();
    container2.innerHTML = `
    <div class="videocontainer">
        <video autoplay muted loop>
            <source src="images/Test.mp4" type="video/mp4">
        </video>
        <div class="container1text">
            <div><h1>Join us, don't waste your time</h1></div>
            <div><h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sed cupiditate asperiores reiciendis officiis a, illo iure libero corrupti aut at, minus labore fuga fugit nulla amet voluptates? Animi, harum.</h5></div>
            <button type="button" class="btn btn-primary btn-lg" id="buttonsign">Sign up</button>
        </div>
    </div>
    `;
    document.body.style.background = "url('./images/EaUnExCU8AAalKe.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    const signin2 = document.getElementById("buttonsign");
    signin2.addEventListener("click", () => {
        container.innerHTML = "";
        container2.innerHTML = "";
        container.innerHTML = generateLogin(); 
        document.body.style.background = "url('./images/login.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        });
    

    
    
});

window.onload = () => {
    container.innerHTML = generatemain();
    container2.innerHTML = `
    <div class="videocontainer">
        <video autoplay muted loop>
            <source  class="img-fluid" src="images/Test.mp4" type="video/mp4">
        </video>
        <div class="container1text">
            <div><h1>Join us, don't waste your time</h1></div>
            <div><h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sed cupiditate asperiores reiciendis officiis a, illo iure libero corrupti aut at, minus labore fuga fugit nulla amet voluptates? Animi, harum.</h5></div>
            <button type="button" class="btn btn-primary btn-lg" id="buttonsign">Sign up</button>
        </div>
    </div>
    `;

    
    const signin2 = document.getElementById("buttonsign");
    signin2.addEventListener("click", () => {
        container.innerHTML = "";
        container2.innerHTML = "";
        container.innerHTML = generateLogin(); 
        document.body.style.background = "url('./images/login.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        });
    };
