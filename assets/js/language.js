
function changeLanguage(lang) {
  fetch("../assets/trad.json")
    .then(response => response.json())
    .then(translations => {
      const elements = document.querySelectorAll("[data-lang]");
      elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
    })
    .catch(error => console.error("Erreur de chargement des traductions:", error));
}

document.getElementById("btn-fr").addEventListener("click", () => changeLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));
changeLanguage("fr"); 
