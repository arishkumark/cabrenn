import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import colors from './colors';
// Create a theme instance.

const light ={
  palette: {
    primary: {
      main: colors.denim,
    },
    secondary: {
      main: colors.pattensBlue,
    },
    error: {
      main: red.A400,
    },
    info: {
      main: colors.solitude
    },
    common: {
      black: colors.black,
      white: colors.white
    }
  },
  typography: {
    fontFamily: 'Konnect',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.black
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: 18,
          padding: '12px 24px',
          fontWeight: 400,
          lineHeight: '25.2px',
        },
        containedSecondary: {
          color: colors.denim
        },
        sizeSmall: {
          fontSize: 16,
          lineHeight: '22.4px',
          padding: '9px 16px',
          minWidth: 82
        },
        sizeLarge: {
          padding: '18px 32px',
          fontSize: 20,
          lineHeight: '28px',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          background: colors.lavenderGrey,
          opacity: 0.2,
          color: colors.black,
          '&.Mui-selected': {
            background: colors.sapphire,
            opacity: 1,
            color: colors.white
          }
        },

      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    }
  }
};

const dark = {
  ...light,
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.pattensBlue,
    },
    error: {
      main: red.A400,
    },
    info: {
      main: colors.masala
    },
    common: {
      black: colors.white,
      white: colors.black
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.white
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.white}`
        },
        input: {
          color: colors.white
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: colors.masala
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: 18,
          padding: '12px 24px',
          fontWeight: 400,
          lineHeight: '25.2px',
          '&.Mui-disabled': {
            background: colors.masala,
          },
          '&:hover': {
            background: colors.tenne,
          }
        },
        containedPrimary: {
          background: colors.peru
        },
        containedSecondary: {
          color: colors.denim
        },
        sizeSmall: {
          fontSize: 16,
          lineHeight: '22.4px',
          padding: '9px 16px',
          minWidth: 82
        },
        sizeLarge: {
          padding: '18px 32px',
          fontSize: 20,
          lineHeight: '28px',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          background: colors.lavenderGrey,
          opacity: 0.2,
          color: colors.black,
          '&.Mui-selected': {
            background: colors.sapphire,
            opacity: 1,
            color: colors.white
          }
        },

      }
    }
  }
}

const theme = responsiveFontSizes(createTheme(light));
const darkTheme = responsiveFontSizes(createTheme(dark));



export { theme, darkTheme };
