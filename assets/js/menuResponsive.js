const btn_mobile = document.getElementById("btnMobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");

  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btn_mobile.addEventListener("click", toggleMenu);
btn_mobile.addEventListener("touchstart", toggleMenu);
