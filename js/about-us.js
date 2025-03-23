// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add 'visible' class when section comes into view
function checkSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Listen for scroll events and check sections
window.addEventListener('scroll', checkSections);

// Initial check when the page loads
checkSections();
