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
})
