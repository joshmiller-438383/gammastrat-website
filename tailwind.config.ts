import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand accent — matches the logo gold
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8C547',
          dark: '#A07D1A',
          glow: 'rgba(201,162,39,0.25)',
        },
        // Secondary accent — warm amber complement
        amber: {
          brand: '#D4A017',
          glow: 'rgba(212,160,23,0.2)',
        },
        // Dark backgrounds
        dark: {
          DEFAULT: '#05070B',
          alt: '#070A12',
          card: '#0C0F18',
          border: 'rgba(255,255,255,0.08)',
          muted: '#AAB4C3',
        },
        // GammaStrat design tokens
        gs: {
          bg: '#05070B',
          card: '#0C0F18',
          border: 'rgba(255,255,255,0.08)',
          gold: '#C9A227',
          'gold-light': '#E8C547',
          'gold-dark': '#A07D1A',
          muted: '#AAB4C3',
          // Keep blue/violet as secondary only
          blue: '#3B82F6',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Gold-based gradients to match logo
        'gradient-brand': 'linear-gradient(135deg, #C9A227 0%, #E8C547 100%)',
        'gradient-brand-text': 'linear-gradient(90deg, #C9A227 0%, #E8C547 100%)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(201,162,39,0.12) 0%, transparent 70%)',
        'radial-glow-lg': 'radial-gradient(ellipse at 30% 50%, rgba(201,162,39,0.08) 0%, transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scroll': 'scroll 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,162,39,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(201,162,39,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
