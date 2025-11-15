import { Templates } from "./templates.js";
import { validarFormulario } from "./form.js";

function setupUI() {
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const route = el.dataset.route;
      if (route) navigate(route);
    });
  });

  const burger = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  document.querySelectorAll('.dropdown').forEach(drop => {
    const btn = drop.querySelector('.drop-toggle');
    const menu = drop.querySelector('.menu');
    if (btn && menu) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const visible = menu.getAttribute('data-open') === 'true';
        document.querySelectorAll('.dropdown .menu').forEach(m => { m.style.display='none'; m.setAttribute('data-open','false'); });
        menu.style.display = visible ? 'none' : 'block';
        menu.setAttribute('data-open', (!visible).toString());
      });
    }
  });

  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown .menu').forEach(m => { m.style.display='none'; m.setAttribute('data-open','false'); });
  });
}

export function navigate(page) {
  const app = document.getElementById("app");
  const tpl = Templates[page] || `<main class="container"><h1>Página não encontrada</h1></main>`;
  app.innerHTML = tpl;
  if (page === "contato") validarFormulario();
  setupUI();
  localStorage.setItem("pagina", page);
}
