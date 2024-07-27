/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-drop-shadow": "0px 5.33px 80px 0px rgba(0, 0, 0, 0.1)",
        "custom-drop": "0px 0px 16px 0px rgba(0, 0, 0, 0.1)",
        "portfolio-card-shadow": "0px 0px 32px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
