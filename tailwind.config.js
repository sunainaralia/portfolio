/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: 'var(--fs_xxs)',
        xs: 'var(--fs_xs)',
        sm: 'var(--fs_sm)',
        base: 'var(--fs_base)',
        md: 'var(--fs_md)',
        lg: 'var(--fs_lg)',
        xl: 'var(--fs_xl)',
        '2xl': 'var(--fs_2xl)',
        '3xl': 'var(--fs_3xl)',
      },
    },
    screens: {
      'xsm': '320px',
      'sm': '568px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    }
  },
  plugins: [],
}
