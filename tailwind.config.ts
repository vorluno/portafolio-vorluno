import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#38BDF8',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        dark: {
          base: '#020817',
          lighter: '#0F172A',
          card: '#111827',
        },
        light: {
          base: '#F8FAFC',
          darker: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #38BDF8 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'particle-float': 'particleFloat var(--duration, 8s) ease-in-out infinite',
        'neon-border': 'neonBorder 3s ease-in-out infinite',
        'typewriter': 'typewriter 0.5s steps(1) infinite',
        'eq-bar': 'eqBar var(--bar-duration, 0.8s) ease-in-out infinite alternate',
        'vinyl-spin': 'vinylSpin 3s linear infinite',
        'orbit-cw': 'orbitCw 6s linear infinite',
        'orbit-ccw': 'orbitCcw 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'compass-needle': 'compassNeedle 3s ease-in-out infinite',
        'star-twinkle': 'starTwinkle var(--twinkle-duration, 2s) ease-in-out infinite',
        'blossom': 'blossom 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(37,99,235,0.4), 0 0 30px rgba(37,99,235,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(37,99,235,0.8), 0 0 60px rgba(56,189,248,0.4), 0 0 100px rgba(37,99,235,0.2)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) translateX(var(--drift, 20px))', opacity: '0' },
        },
        neonBorder: {
          '0%, 100%': { borderColor: 'rgba(37,99,235,0.5)' },
          '50%': { borderColor: 'rgba(56,189,248,0.9)' },
        },
        eqBar: {
          '0%': { height: '4px' },
          '100%': { height: 'var(--bar-max, 24px)' },
        },
        vinylSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitCw: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitCcw: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        compassNeedle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        blossom: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-8px) rotate(5deg)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
