import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DisplayScreen from './DisplayScreen'

describe('DisplayScreen Component', () => {
  it('renders the value correctly', () => {
    const value = '0'
    const { getByText } = render(<DisplayScreen value={value} />)
    const displayElement = getByText(value)
    expect(displayElement).toBeInTheDocument()
  })

  it('should scroll left when user click ArrowLeft', () => {
    const value = '123456789876543210918273645'
    const { getByTestId } = render(<DisplayScreen value={value} />)
    const displayScreen = getByTestId('container-display-value')
    const prevScrollLeft = displayScreen.scrollLeft

    fireEvent.keyDown(displayScreen, { key: 'ArrowLeft' })
    expect(displayScreen.scrollLeft).toBeLessThan(prevScrollLeft)
  })

  it('should scroll right when user click ArrowRight', () => {
    const value = '123456789876543210918273645'
    const { getByTestId } = render(<DisplayScreen value={value} />)
    const displayScreen = getByTestId('container-display-value')
    const scrollLeft = displayScreen.scrollLeft

    fireEvent.keyDown(displayScreen, { key: 'ArrowRight' })
    expect(displayScreen.scrollLeft).toBeGreaterThan(scrollLeft)
  })

})
