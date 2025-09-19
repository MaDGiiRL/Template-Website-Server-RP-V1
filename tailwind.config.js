/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#110005",
                primary50: "#1a0008",
                accent1: "#730A26",
                accent2: "#A57C00",
                accent3: "#700A39",
                accent4: "#BF6C06",
            },
            fontFamily: {
                display: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
                body: ['ui-sans-serif', 'system-ui', 'Roboto', 'Inter', 'sans-serif'],
            },
            boxShadow: {
                glow: "0 0 40px rgba(165,124,0,0.25)",
            },
            backgroundImage: {
                'grid-sheen':
                    "linear-gradient(0deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04)), radial-gradient(circle at 20% 20%, rgba(165,124,0,0.06), transparent 25%), radial-gradient(circle at 80% 0%, rgba(112,10,57,0.06), transparent 30%)",
            },
        },
    },
    plugins: [],
}
