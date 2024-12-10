// JavaScript to dynamically load navbar, footer, and banner
document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    const navbarPlaceholder = document.querySelector('#navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('navbar.html')
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
        fetch('footer.html')
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

    // Load Banner
    const bannerPlaceholder = document.querySelector('#banner-placeholder');
    if (bannerPlaceholder) {
        fetch('banner.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Banner could not be loaded');
                }
                return response.text();
            })
            .then(bannerHTML => {
                bannerPlaceholder.innerHTML = bannerHTML;
            })
            .catch(error => {
                console.error('Error loading the banner:', error);
            });
    }
// Dynamically add the favicon
function addFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'assets/images/spbanner.ico'; // Update the path to your favicon
    link.type = 'image/x-icon';
    document.head.appendChild(link);
}

// Call the function to add the favicon
addFavicon();
});
