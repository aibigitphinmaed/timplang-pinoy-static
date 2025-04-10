function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

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




document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});

document.getElementById('mobile-menu').addEventListener('mouseleave', function() {
    this.classList.remove('active');
});

function changeContent(page, scrollToId=null) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('main-content').innerHTML = '<h1>Page not found</h1>';
            console.error('Error loading page:', error);
        });
}

window.addEventListener('resize', updateDividers);
function updateDividers() {
    const menu = document.getElementById('menu');

    const dividers = document.querySelectorAll('.divider');

    const isHamburgerActive = menu.classList.contains('active');
    dividers.forEach(divider => {
        divider.textContent = isHamburgerActive ? '―' : '|';
    });
}





