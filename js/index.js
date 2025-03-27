document.addEventListener("DOMContentLoaded", function () {
    function loadHomePage() {
        fetch("html/home.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("main-content").innerHTML = data;
            })
            .catch(error => console.error("Error loading home page:", error));
    }

    // Load home.html by default
    loadHomePage();
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("active"); // Toggle menu visibility
    });
});