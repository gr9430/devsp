// JavaScript to dynamically load navbar, footer, and banner

// Adjust base paths for files within the devsp directory
const BASE_PATH = '/devsp/';

document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    const navbarPlaceholder = document.querySelector('#navbar-placeholder');
    if (navbarPlaceholder) {
        const navbarPath = `${BASE_PATH}navbar.html`;
        console.log(`Fetching Navbar from: ${navbarPath}`);
        fetch(navbarPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Navbar could not be loaded. Status: ${response.status}`);
                }
                return response.text();
            })
            .then(navbarHTML => {
                navbarPlaceholder.innerHTML = navbarHTML;
                console.log('Navbar loaded successfully.');
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    }

    // Load Footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        const footerPath = `${BASE_PATH}footer.html`;
        console.log(`Fetching Footer from: ${footerPath}`);
        fetch(footerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Footer could not be loaded. Status: ${response.status}`);
                }
                return response.text();
            })
            .then(footerHTML => {
                footerPlaceholder.innerHTML = footerHTML;
                console.log('Footer loaded successfully.');
            })
            .catch(error => {
                console.error('Error loading the footer:', error);
            });
    }

    // Load Banner
    const bannerPlaceholder = document.querySelector('#banner-placeholder');
    if (bannerPlaceholder) {
        const bannerPath = `${BASE_PATH}banner.html`;
        console.log(`Fetching Banner from: ${bannerPath}`);
        fetch(bannerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Banner could not be loaded. Status: ${response.status}`);
                }
                return response.text();
            })
            .then(bannerHTML => {
                bannerPlaceholder.innerHTML = bannerHTML;
                console.log('Banner loaded successfully.');
            })
            .catch(error => {
                console.error('Error loading the banner:', error);
            });
    }

    // Dynamically add the favicon
    function addFavicon() {
        console.log('Adding favicon...');
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = '/devsp/assets/images/spbanner.ico'; // Update the path to your favicon
        link.type = 'image/x-icon';
        document.head.appendChild(link);
        console.log('Favicon added successfully.');
    }

    // Call the function to add the favicon
    addFavicon();
});
