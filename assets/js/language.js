// Traductions

const translations = {
    en: {
      title: "Welcome to our website",
      description: "This is a multilingual website demo.",
    },
    fr: {
      title: "Bienvenue sur notre site",
      description: "Ceci est une démonstration de site multilingue.",
    }
  };
  
  function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
      const key = element.getAttribute("data-lang");
      element.textContent = translations[lang][key];
    });
  }
  document.getElementById("btn-fr").addEventListener("click", () => changeLanguage("fr"));
  document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));
  changeLanguage("fr");