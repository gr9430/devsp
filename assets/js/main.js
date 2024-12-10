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

// JavaScript to load the navbar and footer on each page
document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
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

    // Load Footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        fetch('assets/html/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Footer could not be loaded');
                }
                return response.text();
            })
            .then(footerHTML => {
                footerPlaceholder.innerHTML = footerHTML;
            })
            .catch(error => {
                console.error('Error loading the footer:', error);
            });
    }
});
