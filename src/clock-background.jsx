// BgFromUrl.js
import { useEffect } from 'react';

const BgFromUrl = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        // Fetch the bg, color-scheme, brightness, and position parameters
        const imageParam = urlParams.get('bg'); // Example: ?bg=yourBase64StringOrURL
        const colorScheme = urlParams.get('color-scheme'); // Example: ?color-scheme=dark or light
        const position = urlParams.get('position'); // Example: ?position=top, center, or bottom

        // Set the background image (base64 or URL)
        if (imageParam) {
            const isBase64 = imageParam.startsWith('data:image/'); // Check if it's base64
            document.body.style.backgroundImage = `url(${imageParam})`;
        }

        // Apply background size and position
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';


        // Handle color scheme (dark or light mode)
        if (colorScheme === 'dark') {
            document.body.style.backgroundColor = '#333'; // Dark background for dark mode
            document.body.style.color = '#fff'; // White text for dark mode
        } else if (colorScheme === 'light') {
            document.body.style.backgroundColor = '#fff'; // Light background for light mode
            document.body.style.color = '#000'; // Black text for light mode
        }

        // Handle position (top, center, bottom)
        if (position === 'top') {
            document.body.style.justifyContent = 'flex-start'; // Align content to top
        } else if (position === 'center') {
            document.body.style.justifyContent = 'center'; // Center content
        } else if (position === 'bottom') {
            document.body.style.justifyContent = 'flex-end'; // Align content to bottom
        }

        // Optionally add classes for CSS-based styling if needed
        if (colorScheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }

    }, []); // Empty dependency array to run once on mount

    return null;
};

export default BgFromUrl;
