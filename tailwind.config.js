/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // sans: ["var(--sans)"],
      // bebas: ["var(--bebas)"],
    },
    extend: {
      backgroundImage: {
        about: "url('/images/about.png')",
      },
    },
  },
  plugins: [],
};
