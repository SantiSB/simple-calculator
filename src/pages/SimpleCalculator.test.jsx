import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import SimpleCalculator from './SimpleCalculator'
import theme from '../styles/theme'
import '@testing-library/jest-dom/extend-expect'

describe('SimpleCalculator', () => {
  it('should render without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <SimpleCalculator />
      </ThemeProvider>
    )
    const calculatorComponent = screen.getByTestId('simple-calculator')
    expect(calculatorComponent).toBeInTheDocument()
  })
})
