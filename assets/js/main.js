// JavaScript to dynamically load navbar, footer, and banner

// Base path for HTML components
const BASE_PATH = '/devsp/';

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded.');

    // Utility function to load an HTML component
    function loadComponent(placeholderId, filePath, componentName) {
        const placeholder = document.querySelector(`#${placeholderId}`);
        if (placeholder) {
            console.log(`${componentName} placeholder found.`);
            fetch(filePath)
                .then(response => {
                    console.log(`${componentName} fetch status:`, response.status);
                    if (!response.ok) {
                        throw new Error(`${componentName} could not be loaded. Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(htmlContent => {
                    console.log(`${componentName} content loaded successfully.`);
                    placeholder.innerHTML = htmlContent;
                })
                .catch(error => {
                    console.error(`Error loading the ${componentName}:`, error);
                });
        } else {
            console.warn(`${componentName} placeholder not found!`);
        }
    }

    // Load Navbar
    loadComponent('navbar-placeholder', `${BASE_PATH}navbar.html`, 'Navbar');

    // Load Footer
    loadComponent('footer-placeholder', `${BASE_PATH}footer.html`, 'Footer');

    // Load Banner
    loadComponent('banner-placeholder', `${BASE_PATH}banner.html`, 'Banner');

    // Dynamically add the favicon
    function addFavicon() {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = `${BASE_PATH}assets/images/spbanner.ico`; // Use absolute path for favicon
        link.type = 'image/x-icon';
        document.head.appendChild(link);
        console.log('Favicon added successfully.');
    }

    // Call the function to add the favicon
    addFavicon();
});
