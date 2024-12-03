import { generateLogin } from "./pages/Login.js";

const loginButton = document.getElementById("login");
const container = document.querySelector(".container");

loginButton.addEventListener("click", () => {
  container.innerHTML = generateLogin();
});
