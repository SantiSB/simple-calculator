import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    black: {
      main: '#000000',
    },
    primary: {
      main: '#FFFFFF',
    },
    grey: {
      main: '#3A3A3A',
      secondary: '#666666'
    },
    secondary: {
      main: '#FFA500',
      secondary: '#FFC054'
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
