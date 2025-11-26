// tailwind.config.js
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-light': '#f9fafb',
        'background-dark': '#1f2937',
        'text-light': '#111827',
        'text-dark': '#f9fafb',
        'primary-light': '#00697c',
        'primary-dark': '#19b7b3',
        'header-light': '#ffffff',
        'header-dark': '#1f2937',
      },
    },
  },
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
};
