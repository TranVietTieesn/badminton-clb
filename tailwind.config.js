/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 2025 Minimalist Palette
        offwhite: '#fafbfc',
        lightgray: '#e5e7eb',
        mutedblack: '#1f2937',
        
        // Accent Colors
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        coral: {
          50: '#fef7f5',
          100: '#fdebe7',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        
        // Glass/Blur backgrounds
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.1)',
        },
        pastelblue: '#a3c9f9',
        'neuro': {
          'bg': '#f0f4f8',
          'light': '#ffffff',
          'dark': '#d1d9e6',
        },
        'pastel': {
          'mint': '#b8e6d3',
          'pink': '#f4c2c2',
          'purple': '#d4c5f9',
          'yellow': '#fef1d7',
          'blue': '#bfdbfe',
          'orange': '#fed7aa',
        },
        'soft': {
          'sage': '#eaf4f4',
          'lavender': '#e6e1ff',
          'blush': '#fdf2f2',
          'cream': '#f5f5f7',
        },
        'mint': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'cute': {
          'pink': '#f4c2c2',
          'mint': '#b8e6d3',
          'yellow': '#fef1d7',
          'purple': '#d4c5f9',
          'blue': '#bfdbfe',
          'orange': '#fed7aa',
        }
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        '350': '350',
        '450': '450',
        '550': '550',
        '650': '650',
        '750': '750',
        '850': '850',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'parallax': 'parallax 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'micro-bounce': 'microBounce 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        microBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'micro': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'premium': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 