/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'retro': ['MS Sans Serif', 'Chicago', 'sans-serif'],
        'mono': ['Courier New', 'monospace'],
      },
      colors: {
        'arngren-blue': '#0000ff',
        'arngren-red': '#ff0000',
        'arngren-yellow': '#ffff00',
        'arngren-green': '#00ff00',
        'arngren-orange': '#ff8000',
        'arngren-purple': '#8000ff',
        'arngren-gray': '#c0c0c0',
        'arngren-dark': '#000080',
        'arngren-bg': '#ffffff',
        'arngren-text': '#000000',
        'arngren-link': '#0000ff',
        'arngren-border': '#000000',
        'custom-red': '#A60000',
      },
      animation: {
        'scan-line': 'scan-line 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 0.15s infinite linear',
      },
      keyframes: {
        'scan-line': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
          '100%': { boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 0.99 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
}
