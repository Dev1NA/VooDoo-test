/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html,js}'],
  theme: {
    screens: {
      xs: '320px',
      m: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      grotesk: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        // Встановлюємо червоний колір як дефолтний колір тексту
        bg: '#FCF7E6',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1317px', // Ваша власна ширина контейнера
          xl: '1317px', // Ваша власна ширина контейнера
        },
      },
    },
  },
  plugins: [],
};
