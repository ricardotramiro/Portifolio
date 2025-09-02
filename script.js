// ===== Alternância do tema =====
const themeButton = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

// Começa no modo escuro
document.body.classList.add("dark-mode");
themeIcon.classList.replace("fa-moon", "fa-sun");

// Alterna os temas
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Alterna ícone
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});


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
