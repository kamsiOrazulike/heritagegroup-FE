/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "rce-homes":
          'url("https://www.rainbowheritage.com.ng/wp-content/uploads/2021/09/Exterior-5-scaled.jpg")',
        "arial-shot": 'url("/static/imgs/rcearial.jpg")',
        "rce-shot-1": 'url("/static/imgs/rcearial2.jpg")',
        "rce-shot-2": 'url("/static/imgs/rcearialplayground.jpg")',
        "rce-shot-3": 'url("/static/imgs/rcehome.jpg")',
      },
    },
  },
  plugins: [],
};
