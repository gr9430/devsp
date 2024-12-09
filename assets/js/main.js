// Toggles the mobile navigation menu visibility
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navbarMobile = document.querySelector('.navbar-mobile');
    const isActive = navbarMobile.classList.toggle('active'); // Toggles the 'active' class
    hamburger.setAttribute('aria-expanded', isActive); // Updates the aria-expanded attribute
}
