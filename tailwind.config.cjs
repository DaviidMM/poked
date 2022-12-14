/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'rotate(5deg)' },
          '20%, 80%': { transform: 'rotate(-5deg)' },
          '30%, 50%, 70%': {
            transform: 'rotate(5deg)',
          },
          '40%, 60%': { transform: 'rotate(-5deg)' },
          '0%, 100%': { transform: 'rotate(0)' },
        },
      },
    },
  },
  plugins: [],
};
