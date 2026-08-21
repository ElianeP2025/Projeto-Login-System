/* ==================================
GERENCIADOR DE TEMA GLOBAL
================================== */
function inicializarTema() {
    const btnThemeToggle =
        document.querySelector(".theme-toggle-btn");
    const pThemeToggle =
        document.querySelector(".theme-toggle-p");
    const body = document.body;
    // 1. Recupera o tema salvo
    const temaSalvo = localStorage.getItem("theme");
    if (temaSalvo === "light") {
        body.classList.add("light");
        pThemeToggle.classList.remove("light");
        if (btnThemeToggle) {
            btnThemeToggle.textContent = "🌑";
            pThemeToggle.textContent = "Dark";
        }
    } else {
        body.classList.remove("light");
        pThemeToggle.classList.add("light");
        if (btnThemeToggle) {
            btnThemeToggle.textContent = "🌕";
            pThemeToggle.textContent = "Light";
        }
    }

    // 2. Configura o botão
    if (btnThemeToggle) {
        btnThemeToggle.addEventListener("click", () => {
            body.classList.toggle("light");
            pThemeToggle.classList.toggle("light");
            if (body.classList.contains("light")) {
                btnThemeToggle.textContent = "🌑";
                pThemeToggle.textContent = "Dark";
                localStorage.setItem("theme", "light");
            } else {
                btnThemeToggle.textContent = "🌕";
                pThemeToggle.textContent = "Light";
                localStorage.setItem("theme", "dark");
            }
        });
    }
}
// Executa a inicialização
inicializarTema();