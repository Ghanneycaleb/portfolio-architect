/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Navy Blue - Primary brand color
        navy: {
          50: '#e6f0ff',   // Very light navy (backgrounds)
          100: '#cce0ff',  // Light navy
          200: '#99c2ff',  // Soft navy
          300: '#4d94ff',  // Medium navy
          400: '#0066ff',  // Bright navy
          500: '#0052cc',  // True navy (main brand)
          600: '#003d99',  // Dark navy
          700: '#002966',  // Deeper navy
          800: '#001a4d',  // Very dark navy
          900: '#000d26',  // Almost black navy
        },
        
        // Beige - Warm accents
        beige: {
          50: '#fdfbf7',   // Almost white beige
          100: '#f8f4ed',  // Very light beige
          200: '#f0e8d9',  // Light beige
          300: '#e8dcc5',  // Soft beige
          400: '#d4c4a8',  // Medium beige
          500: '#c0ac8b',  // True beige (warm accent)
          600: '#a6946f',  // Dark beige
          700: '#8c7c59',  // Deeper beige
          800: '#6b5e42',  // Very dark beige
          900: '#4a402d',  // Almost brown
        },
        
        // Grey - Neutral tones
        grey: {
          50: '#f9fafb',   // Almost white
          100: '#f3f4f6',  // Very light grey
          200: '#e5e7eb',  // Light grey
          300: '#d1d5db',  // Soft grey
          400: '#9ca3af',  // Medium grey
          500: '#6b7280',  // True grey
          600: '#4b5563',  // Dark grey
          700: '#374151',  // Deeper grey
          800: '#1f2937',  // Very dark grey
          900: '#111827',  // Almost black
        },
        
        // Accent color (bright navy for CTAs)
        accent: {
          light: '#4d94ff',   // Light version
          DEFAULT: '#0052cc', // Main accent (navy)
          dark: '#003d99',    // Dark version
          beige: '#c0ac8b',   // Beige accent alternative
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}