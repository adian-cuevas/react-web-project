import { FC } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useGlobalStore } from '../store/globalStore'

type ThemeProp = {
  children: JSX.Element
}

enum themePalette {
  FONT_GLOBAL = "'JetBrains Mono', monospace",

  //Alert styles
  ERROR_MAIN = '#F44336',
  BG_ERROR_MAIN = 'rgba(244,67,54,0.1)',
}

export const ThemeConfig: FC<ThemeProp> = ({ children }) => {
  const toggleMode = useGlobalStore((state) => state.toggleMode)
  const theme = createTheme({
    palette: {
      mode: toggleMode ? 'dark' : 'light',
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
