const botonMenuHamburguesaLeon = document.querySelector(
  ".boton-menuBurguerLeon"
);
const containerListadeMenu = document.querySelector(
  ".container-menuBurguerLeon"
);
const botonModificadoaCruz = document.querySelectorAll(
  ".boton-menuBurguerLeon span"
);

botonMenuHamburguesaLeon.addEventListener("click", () => {
  containerListadeMenu.classList.toggle("active");

  botonModificadoaCruz.forEach((child) => {
    child.classList.toggle("cruz");
  });
});
