import { generateLogin } from "./pages/Login.js";
import { generatemain } from "./pages/main.js";

const loginButton = document.getElementById("login");
const mainButton = document.getElementById("main");
const container = document.querySelector(".container");
const container2=document.querySelector(".container1part2")

loginButton.addEventListener("click", () => {
    container.innerHTML = "";
    container2.innerHTML="";
    container.innerHTML = generateLogin(); 
    document.body.style.background = "url('./images/login.jpg')"; // 
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
      <button type="button" class="btn btn-primary btn-lg">Sign up</button>
    </div>
  </div>
`;
    document.body.style.background = "url('./images/EaUnExCU8AAalKe.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

});
window.onload = () => {
    container.innerHTML = generatemain();
    container2.innerHTML = `
  <div class="videocontainer">
    <video autoplay muted loop>
      <source src="images/Test.mp4" type="video/mp4">
    </video>
    <div class="container1text">
      <div><h1>Join us, don't waste your time</h1></div>
      <div><h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sed cupiditate asperiores reiciendis officiis a, illo iure libero corrupti aut at, minus labore fuga fugit nulla amet voluptates? Animi, harum.</h5></div>
      <button type="button" class="btn btn-primary btn-lg">Sign up</button>
    </div>
  </div>
`;
};
