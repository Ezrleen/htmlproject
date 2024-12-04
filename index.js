import { generateLogin } from "./pages/Login.js";

const loginButton = document.getElementById("login");
const container = document.querySelector(".container");

loginButton.addEventListener("click", () => {
    container.innerHTML ="";
    container.innerHTML = generateLogin();
    document.body.style.background = "url('login.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});
