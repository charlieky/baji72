import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  safelist: [
    {
      pattern: /(col|row)-span-[1-9]/,
      variants: ['md', 'sm'],
    },
    {
      pattern: /(col|row)-span-(10|11|12)/,
      variants: ['md', 'sm'],
    },
  ],

  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu Arabic', 'sans-serif'],
      open: ['Open Sans', 'sans-serif'],
    },
    container: {
      center: true,
    },
    screens: {
      xxl: { max: '1600px' },

      xl: { max: '1400px' },

      lg: { max: '1200px' },

      md: { max: '992px' },

      sm: { max: '768px' },

      xs: { max: '577px' },
    },
    flex: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
    },
    extend: {
      width: {
        nine: '90%',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },

      colors: {
        dark: '#777',
        darker: '#121212',
        light: '#f9f9f9',
        primary: '#1B62E8',
      },
    },
  },
  plugins: [],
} satisfies Config
