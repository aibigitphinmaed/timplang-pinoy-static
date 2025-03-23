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
