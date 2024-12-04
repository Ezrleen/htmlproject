import { generateLogin } from "./pages/Login.js";
import { generatemain } from "./pages/main.js";

const loginButton = document.getElementById("login");
const mainButton = document.getElementById("main");
const container = document.querySelector(".container");


loginButton.addEventListener("click", () => {
    container.innerHTML = "";
    container.innerHTML = generateLogin(); 
    document.body.style.background = "url('./images/login.jpg')"; // 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});


mainButton.addEventListener("click", () => {
    container.innerHTML = ""; 
    container.innerHTML = generatemain();
    document.body.style.background = "url('./images/EaUnExCU8AAalKe.jpg')"; 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});
window.onload=(() => {
    
    container.innerHTML = generatemain();
});
window.addEventListener("")