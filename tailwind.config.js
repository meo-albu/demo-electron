const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./renderer/pages/**/*.{js,ts,jsx,tsx}', './renderer/components/**/*.{js,ts,jsx,tsx}', './node_modules/@driven-crm/ui/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        button: {
          primary: {
            default: colors.indigo[700],
            hover: colors.indigo[600],
            focus: colors.indigo[800],
            selected: colors.indigo[800],
            text: colors.white
          },
          secondary: {
            default: colors.green[700],
            hover: colors.green[600],
            focus: colors.green[800],
            selected: colors.green[800],
            text: colors.white
          },
          tertiary: {
            default: colors.yellow[700],
            hover: colors.yellow[600],
            focus: colors.yellow[800],
            selected: colors.yellow[800],
            text: colors.white
          },
          minimal: {
            default: colors.red[700],
            hover: colors.red[600],
            focus: colors.red[800],
            selected: colors.red[800],
            text: colors.white
          },
          disabled: {
            default: colors.gray[700],
            text: colors.white
          },
          success: {
            default: colors.teal[700],
            hover: colors.teal[600],
            focus: colors.teal[800],
            selected: colors.teal[800],
            text: colors.white
          },
          warning: {
            default: colors.yellow[700],
            hover: colors.yellow[600],
            focus: colors.yellow[800],
            selected: colors.yellow[800],
            text: colors.white
          },
          danger: {
            default: colors.red[700],
            hover: colors.red[600],
            focus: colors.red[800],
            selected: colors.red[800],
            text: colors.white
          },
          dark: {
            primary: {
              default: colors.indigo[700],
              hover: colors.indigo[600],
              focus: colors.indigo[800],
              selected: colors.indigo[800],
              text: colors.white
            },
            secondary: {
              default: colors.green[700],
              hover: colors.green[600],
              focus: colors.green[800],
              selected: colors.green[800],
              text: colors.white
            },
            tertiary: {
              default: colors.yellow[700],
              hover: colors.yellow[600],
              focus: colors.yellow[800],
              selected: colors.yellow[800],
              text: colors.white
            },
            minimal: {
              default: colors.red[700],
              hover: colors.red[600],
              focus: colors.red[800],
              selected: colors.red[800],
              text: colors.white
            },
            disabled: {
              default: colors.gray[700],
              text: colors.white
            },
            success: {
              default: colors.teal[700],
              hover: colors.teal[600],
              focus: colors.teal[800],
              selected: colors.teal[800],
              text: colors.white
            },
            warning: {
              default: colors.yellow[700],
              hover: colors.yellow[600],
              focus: colors.yellow[800],
              selected: colors.yellow[800],
              text: colors.white
            },
            danger: {
              default: colors.red[700],
              hover: colors.red[600],
              focus: colors.red[800],
              selected: colors.red[800],
              text: colors.white
            },
          }
        },
        input: {
          disabled: {
            background: colors.gray[100],
            border: colors.gray[600]
          },
          primary: {
            background: 'transparent',
            border: colors.indigo[600]
          },
          secondary: {
            background: colors.blue[100],
            border: colors.blue[600]
          },
          success: {
            background: colors.green[100],
            border: colors.green[600]
          },
          warning: {
            background: colors.yellow[100],
            border: colors.yellow[600]
          },
          danger: {
            background: colors.red[100],
            border: colors.red[600]
          },
          dark: {
            disabled: {
              background: colors.gray[100],
              border: colors.gray[600]
            },
            primary: {
              background: colors.indigo[100],
              border: colors.indigo[600]
            },
            secondary: {
              background: colors.blue[100],
              border: colors.blue[600]
            },
            success: {
              background: colors.green[100],
              border: colors.green[600]
            },
            warning: {
              background: colors.yellow[100],
              border: colors.yellow[600]
            },
            danger: {
              background: colors.red[100],
              border: colors.red[600]
            },
          }
        },
        current: colors.current,
        background: colors.white,
        hover: colors.gray[50],
        selected: colors.gray[100],
        primary: colors.indigo[700],
        secondary: colors.blue[200],
        tertiary: colors.blue[50],
        success: colors.green[300],
        warning: colors.yellow[300],
        danger: colors.yellow[300],
        text: colors.gray[900],
        dark: {
          current: colors.white,
          background: colors.blueGray[900],
          hover: colors.gray[700],
          selected: colors.gray[600],
          primary: colors.blue[700],
          secondary: colors.blue[200],
          tertiary: colors.blue[50],
          success: colors.green[300],
          warning: colors.yellow[300],
          danger: colors.yellow[300],
          text: colors.gray[100]
        }
      },
      fontFamily: {
        inter: "Inter"
      },
      minWidth: {
        screen: '310px'
      },
      width: {
        '120': '30rem'
      },
      zIndex: {
       '100': 100,
       '101': 101, //drawer
       '102': 102, //modal
       '200': 200, //snackbar
       '-10': '-1',
      },
      animation: {
        fadeIn: "fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        slide: "slide 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        slide: {
          "0%": { transform: 'translateY(30px)' },
          "100%": { transform: 'translateY(0)' }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
