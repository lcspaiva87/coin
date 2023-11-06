/** @type {import('tailwindcss').Config} */
const screens = {
  sm: '320px',
  md: '768px',
  lg: '1440px',
}
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    colors: {
      primary: {
        100: '#FFF6E8',
        200: '#FFE1B5',
        300: '#FFCD82',
        400: '#FFB94F',
        500: '#FBAB34',
        600: '#E09422',
        700: '#AD721A',
        800: '#7A4E0C',
        900: '#472C04',
        DEFAULT: '#FBAB34',
      },
      secondary: {
        100: '#F6F6F6',
        200: '#F4F3F8',
        300: '#E0DEEA',
        400: '#ACABB7',
        500: '#8C8A97',
        600: '#716F7A',
        700: '#5F5C6B',
        800: '#4E4B59',
        900: '#33303E',
        DEFAULT: '#8C8A97',
      },
      tertiary: {
        100: '#E8FAF1',
        200: '#D1F6E3',
        300: '#A4EDC6',
        400: '#8DE8B8',
        500: '#1BD171',
        600: '#18B863',
        700: '#149E55',
        800: '#0E6B3A',
        900: '#07381E',
        DEFAULT: '#1BD171',
      },
      quaternary: {
        100: '#FFF2F3',
        200: '#FFCFD0',
        300: '#FF9497',
        400: '#FA7D80',
        500: '#EC3237',
        600: '#D42D31',
        700: '#A12226',
        800: '#6E171A',
        900: '#3B0C0E',
        DEFAULT: '#EC3237',
      },
      white: '#FFFFFF',
      black: '#000000',
      body: '#5D6670',
      transparent: 'transparent',
    },

    fontWeight: {
      normal: '400',
      norma: '500',
      semibold: '600',
      bold: '700',
    },
    fontFamily: {},

    container: {
      screens,
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '3rem',
        lg: '7rem',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {

        // lg: "var(--radius)",
        // md: "calc(var(--radius) - 2px)",
        // sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    [require('tailwindcss-animate')],
  ],
}
