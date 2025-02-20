// Theme on load 
document.addEventListener("DOMContentLoaded", function () {
    //get theme
    const savedTheme = localStorage.getItem("selectedTheme");
    
    // get theme body
    const currentTheme = document.body.className;
  
    if (currentTheme && currentTheme.startsWith("theme-")) {
      //override by theme body
      localStorage.setItem("selectedTheme", currentTheme); //update local storage
    } else if (savedTheme) {
      document.body.className = savedTheme;
    } else {
        //default
      document.body.className = "theme-red";
      localStorage.setItem("selectedTheme", "theme-red");
    }
  });
  
  // apply dynamicly
  function applyTheme(themeClass) {
    document.body.className = themeClass;
    localStorage.setItem("selectedTheme", themeClass);
  }
  
  // button
  document.querySelectorAll(".color-item").forEach(item => {
    item.addEventListener("click", function () {
      const themeClass = this.getAttribute("data-class");
      applyTheme(themeClass);
    });
  });
  