module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  theme: {
    fontFamily: {
      display: ['Catamaran', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#202442',
        'background-secondary': '#25294A',
        item: '#2D325A',
        primary: '#4E7CFF',
        rare: {
          from: '#AD76B0',
          to: '#665680',
        },
        legendary: {
          from: '#B9812E',
          to: '#846332',
        },
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        rare: '0 0 0 3px rgba(173, 118, 176, 0.5)',
        legendary: '0 0 0 3px rgba(185, 129, 46, 0.5)',
        outline: '0 0 0 2px #4E7CFF',
        select: '0 20px 16px rgba(0, 0, 0, 0.5)',
      },
      height: {
        14: '3.5rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus'],
    backgroundImage: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['group-hover'],
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
