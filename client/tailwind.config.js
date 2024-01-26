/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        "dancing-script": ["Dancing Script", "serif"],
      },
      colors: {
        beige: {
          light: '#EECEB0',
          dark: '#A96449',
          lightest: '#FDFDFD'
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
