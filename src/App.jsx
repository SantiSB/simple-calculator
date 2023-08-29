import { ThemeProvider } from '@mui/material'
import SimpleCalculator from './pages/SimpleCalculator'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SimpleCalculator />
    </ThemeProvider>
  )
}

export default App
