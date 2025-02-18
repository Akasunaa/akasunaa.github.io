
const baseHtmlPath = window.location.origin + "/" + "html/";

function includeHTML(selector, file,callback) {
  document.addEventListener("DOMContentLoaded", function() {
    fetch(baseHtmlPath+file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(selector).innerHTML = data;
            if (callback) callback(); 
        })
        .catch(error => console.error('Erreur lors du chargement du footer:', error));
  });
}

includeHTML('down-page','down.html')
includeHTML('up-page', 'up.html', function() {
  document.getElementById("btn-fr").addEventListener("click", () => changeLanguage("fr"));
  document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));
  changeLanguage("fr"); 
});