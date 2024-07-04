/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#000000",
          primary: "#1a73e8",
          secondary: "#ff5722",
        },
        dark: {
          background: "#121212",
          text: "#ffffff",
          primary: "#1a73e8",
          secondary: "#ff5722",
        },
      },
    },
  },
  plugins: [],
};
