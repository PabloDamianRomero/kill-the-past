window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  document.getElementById("navbar").style.background = "#fff";
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.onkeydown = function (e) {
//   // disable F12 key
//   if (e.keyCode == 123) {
//     return false;
//   }

//   // disable I key
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//     return false;
//   }

//   // disable J key
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//     return false;
//   }

//   // disable U key
//   if (e.ctrlKey && e.keyCode == 85) {
//     return false;
//   }
// };

/* Funciones para subir al principio de una página */
function scrollUp() {
  var $currentScroll = document.documentElement.scrollTop; // Obtiene el número de pixels desplazados
  if ($currentScroll > 0) {
    window.requestAnimationFrame(scrollUp); // window.requestAnimationFrame informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
    window.scrollTo(0, $currentScroll - ($currentScroll / 15)); // Velocidad de scroll
  }
}

var $button = document.getElementById('pageUp');
window.onscroll = function () {
  var $scroll = document.documentElement.scrollTop;
  if ($scroll > 500) {
    $button.style.transform = 'scale(1)';
  } else {
    $button.style.transform = 'scale(0)';
  }
}