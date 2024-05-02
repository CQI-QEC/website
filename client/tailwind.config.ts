export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                light: {
                    // This color is also inlined in `index.html`.
                    primary: "#f8f9fa",
                    secondary: "#131313",
                    highlight: "#17d87d",
                },
                dark: {
                    // This color is also inlined in `index.html`.
                    primary: "#131313",
                    secondary: "#dddbd8",
                    highlight: "#17d87d",
                },
            },
        },
        plugins: [],
    },
    darkMode: "class",
}
