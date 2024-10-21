/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      previewimage: {
        preview: "src/assets/preview.png",
      },
    },
    fontFamily: {
      serif: ["Fraunces"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};