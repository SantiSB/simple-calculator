import { ThemeProvider, createTheme } from '@mui/material'
import SimpleCalculator from './pages/SimpleCalculator'

const theme = createTheme()
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SimpleCalculator />
    </ThemeProvider>
  )
}

export default App
