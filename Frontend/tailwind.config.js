/** @type {import('tailwindcss').Config} */
import gradients from "tailwindcss-gradients";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [gradients],
};
