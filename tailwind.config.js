/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,html}'],
  darkMode: 'class',
  theme: { extend: { colors: { theocratic_schedule_sync: { light: '##0ea5e9', dark: '##38bdf8' } } } }
};
