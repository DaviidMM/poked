/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        checkmark: 'checkmark .2s ease-in-out',
        'undo-checkmark': 'undo-checkmark .2s ease-in-out',
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
        checkmark: {
          '0%': {
            height: '0',
            width: '0',
          },

          '50%': {
            height: '0',
            width: '45%',
          },

          '100%': {
            height: '80%',
            width: '45%',
          },
        },
        'undo-checkmark': {
          '0%': {
            height: '66.6666666666666%',
            width: '33.3333333333333%',
            opacity: 1,
          },
          '50%': {
            height: '0',
            width: '33.3333333333333%',
          },
          '100%': {
            height: '0',
            width: '0',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
