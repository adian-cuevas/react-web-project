import { FC } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

type ThemeProp = {
  children: JSX.Element
}

enum themePalette {
  BG = '#12181b',
  LIME = '#c8fa5f',
  ORANGE = '#ffaa3b',
  FONT_GLOBAL = "'JetBrains Mono', monospace",

  //Alert styles
  ERROR_MAIN = '#F44336',
  BG_ERROR_MAIN = 'rgba(244,67,54,0.1)',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
    secondary: {
      main: themePalette.ORANGE,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.8em',
          fontSize: '1em',
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
      },
    },
  },
})
export const ThemeConfig: FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
