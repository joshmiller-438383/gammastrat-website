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
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8C547',
          dark: '#A07D1A',
        },
        teal: {
          brand: '#2DD4BF',
        },
        blue: {
          brand: '#3B82F6',
          glow: 'rgba(59,130,246,0.25)',
        },
        violet: {
          brand: '#8B5CF6',
          glow: 'rgba(139,92,246,0.25)',
        },
        dark: {
          DEFAULT: '#05070B',
          alt: '#070A12',
          card: '#080D18',
          border: 'rgba(255,255,255,0.08)',
          muted: '#AAB4C3',
        },
        gs: {
          bg: '#05070B',
          card: '#080D18',
          border: 'rgba(255,255,255,0.08)',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          muted: '#AAB4C3',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-brand-text': 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(59,130,246,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
