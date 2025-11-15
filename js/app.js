import { navigate } from "./router.js";

window.navigate = navigate;

document.addEventListener("DOMContentLoaded", () => {
  const ultima = localStorage.getItem("pagina") || "home";
  navigate(ultima);
});
