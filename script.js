// Seleciona o botão
const backToTop = document.getElementById("back-to-top");

// Detecta a rolagem da página
window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    // quando passar de 1000px

    backToTop.style.display = "block"; // aparece
  } else {
    backToTop.style.display = "none"; // some
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // rolagem suave
});
