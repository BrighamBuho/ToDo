/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Asegúrate de incluir todas las rutas necesarias
  theme: {
    extend: {
      colors: {
        primary: "#6200ea", // Color principal
        secondary: "#3700b3", // Color secundario
        background: "#f4f4f4", // Fondo
        text: "#ffffff", // Texto
      },
      fontFamily: {
        logo: ["'Poppins'", "sans-serif"], // Fuente personalizada para el logo
      },
    },
  },
  plugins: [],
}