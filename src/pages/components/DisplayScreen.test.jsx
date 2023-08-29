import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DisplayScreen from './DisplayScreen'

describe('DisplayScreen Component', () => {
  it('renders the value correctly', () => {
    const value = '0'
    const { getByText } = render(<DisplayScreen value={value} />)
    const displayElement = getByText(value)
    expect(displayElement).toBeInTheDocument()
  })

  it('has the correct CSS classes and styles', () => {
    const value = '5+6'
    const { getByText } = render(<DisplayScreen value={value} />)
    const displayElement = getByText(value)

    expect(displayElement).toHaveClass('display')
    expect(displayElement).toHaveStyle(`
      display: flex;
      align-content: center;
      justify-content: right;
      height: 70px;
      width: auto;
      overflow-x: auto;
      white-space: nowrap;
    `)
  })
})
