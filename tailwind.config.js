/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         textColor: {
            skin: {
               base: "var( --color-text-base)",
            },
         },
         backgroundColor: {
            skin: {
               fill: "var(--color-fill)",
               themeBtn: "var(--color-themeBtn)",
               bgColor: "var(--bgColor)",
            },
         },
      },
   },
   plugins: [],
};
