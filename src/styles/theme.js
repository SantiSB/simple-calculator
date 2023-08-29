import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    black: {
      main: '#000000',
    },
    white: {
      main: '#FFFFFF',
    },
    gray: {
      main: '#3A3A3A',
    },
    orange: {
      main: '#FFA500',
    },
  },
})

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

export default theme
