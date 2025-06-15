/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './design/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /*
         * Brand palette – update anytime in one place.
         * Generates e.g. text-primary, bg-secondary-700, border-neutral-200 ...
         */
        primary: {
          DEFAULT: '#1E40AF', // Indigo-900
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          DEFAULT: '#D97706', // Amber-700
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        neutral: {
          DEFAULT: '#374151', // Gray-700
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      spacing: {
        xs: '0.25rem', // 4px
        sm: '0.5rem',  // 8px
        md: '1rem',    // 16px
        lg: '1.5rem',  // 24px
        xl: '2rem',    // 32px
        '2xl': '3rem', // 48px
        '3xl': '4rem', // 64px
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px / 16px
        sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px / 20px
        base: ['1rem', { lineHeight: '1.5rem' }],     // 16px / 24px
        lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px / 28px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px / 28px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px / 32px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px / 36px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px / 40px
      },
    },
  },
  plugins: [],
};
