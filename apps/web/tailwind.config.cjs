const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{ts,tsx}', './src/**/*.stories.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        // sm: '600px',
        // md: '900px',
        // lg: '1200px',
        'touch-device': { raw: '(hover: none)' },
        'touch-no-animation': { raw: '(prefers-reduced-motion)' }
      },
      colors: {
        dark: '#001E3C',
        darker: '#0A1929',
        lighter: '#F3F6F9'
      },
      backgroundImage: {
        darkGradient: 'linear-gradient(to right, #007FFF, #0059B2)',
        lightGradient: 'linear-gradient(to right, #00c6fb 0%, #005bea 100%)',
        dashGradient: 'linear-gradient(to right bottom, #007FFF, #0059B2 120%)',
        myJourneyLayerOneLight:
          'linear-gradient(to bottom, #F3F6F9 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, #F3F6F9 100%)',
        myJourneyLayerOneDark:
          'linear-gradient(to bottom, #0A1929 0%, rgb(10 25 41 / 0%) 30%, rgb(10 25 41 / 0%) 70%, #0A1929 100%)',
        myJourneyLayerTwoLight:
          'linear-gradient(to right, #F3F6F9, rgba(255,255,255,0))',
        myJourneyLayerTwoDark:
          'linear-gradient(to right, #0A1929, rgba(10, 25, 41, 0))',
        darkStoneUi: 'linear-gradient(180deg, #0A1929 0%, #001E3C 100%)',
        lightStoneUi: 'linear-gradient(180deg, #F3F6F9 0%, #FFFFFF 100%)',
        darkLibrary: 'linear-gradient(85deg, #132F4C 0%, #173A5E 100%)'
      },
      boxShadow: {
        anchoredLight: '0 6px 20px 0 rgba(0,0,0,0.2)',
        anchoredDark: '0 6px 20px 0 rgba(206,224,243,0.5)}',
        journeyLogoLight: '0px 3.57436px 44.6795px rgba(90, 105, 120, 0.36)',
        journeyLogoDark: '0px 3.57436px 44.6795px #0A1929',
        journeyImageLight: '0px 4px 20px rgba(61, 71, 82, 0.25)',
        journeyImageDark: '0px 4px 20px rgba(0, 0, 0, 0.6)',
        darkStoneCard: '#00000080 0px 4px 20px',
        lightStoneCard: '#aab4be4d 0px 4px 20px'
      },
      translate: {},
      animation: {
        'work-slide-up':
          '30s ease-out 0s 1 normal forwards running workSlideup',
        'work-slide-down':
          '30s ease-out 0s 1 normal forwards running workSlidedown',
        'journey-slide-up':
          '30s ease-out 0s 1 normal forwards running journeySlideUp',
        'journey-slide-down':
          '30s ease-out 0s 1 normal forwards running journeySlideDown'
      },
      keyframes: {
        workSlideup: {
          '0%': {
            transform: 'translateY(150px)'
          },
          '100%': {
            transform: 'translateY(-20px)'
          }
        },
        workSlidedown: {
          '0%': {
            transform: 'translateY(-300px)'
          },
          '100%': {
            transform: 'translateY(-60px)'
          }
        },
        journeySlideUp: {
          '0%': {
            transform: 'translateY(-300px)'
          },
          '100%': {
            transform: 'translateY(-20px)'
          }
        },
        journeySlideDown: {
          '0%': {
            transform: 'translateY(150px)'
          },
          '100%': {
            transform: 'translateY(-80px)'
          }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    })
  ]
};

export default tailwindConfig;
