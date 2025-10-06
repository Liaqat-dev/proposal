import cardsStyle from "./plugins/card.js";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // adjust to your project structure
    ],
    theme: {
        extend: {},
    },
    plugins: [cardsStyle],
};
