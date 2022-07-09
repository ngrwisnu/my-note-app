/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#010C37",
      },
      boxShadow: {
        btn: "0px 6px 16px rgba(248, 54, 0, 0.4)",
        note: "0px 8px 10px rgba(0, 0, 0, 0.08), 0px 3px 5px rgba(0, 0, 0, 0.04), 0px 2.5px 2px rgba(0, 0, 0, 0.02)",
        tab: "1px -1px 1px rgba(21, 21, 21, 0.04), 0px -1px 1px rgba(21, 21, 21, 0.04), -1px -1px 1px rgba(21, 21, 21, 0.04)",
      },
    },
  },
  plugins: [],
};
