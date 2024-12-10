// Toggles the mobile navigation menu visibility
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navbarMobile = document.querySelector('.navbar-mobile');
    const isActive = navbarMobile.classList.toggle('active'); // Toggles the 'active' class
    hamburger.setAttribute('aria-expanded', isActive); // Updates the aria-expanded attribute
}

// JavaScript to load the navbar on each page
document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.querySelector('#navbar-placeholder');

    if (navbarPlaceholder) {
        fetch('assets/html/navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Navbar could not be loaded');
                }
                return response.text();
            })
            .then(navbarHTML => {
                navbarPlaceholder.innerHTML = navbarHTML;
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    }
});
