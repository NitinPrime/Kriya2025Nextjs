/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all components and pages
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      fontFamily: {
        brunoace: ["'Bruno Ace'", "sans-serif"], // Bruno Ace font
        orbitron: ["'Orbitron'", "sans-serif"], // Orbitron font
        stalinist: ["'Stalinist One'", "cursive"], // Stalinist One font
      },
    },
  },
  plugins: [],
};
