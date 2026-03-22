/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4c1d95', // Violet 900
                secondary: '#8b5cf6', // Violet 500
            }
        },
    },
    plugins: [],
}
