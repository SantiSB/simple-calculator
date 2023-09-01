import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ButtonsContainer from './ButtonsContainer'
import { BUTTONS_DATA } from '../utils/buttonsData'
import '@testing-library/jest-dom/extend-expect'

describe('ButtonsContainer', () => {
  const mockHandleButtonClicked = jest.fn()

  beforeEach(() => {
    render(<ButtonsContainer handleButtonClicked={mockHandleButtonClicked} />)
  })

  it('renders all buttons', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(20)
  })

  it('calls handleButtonClicked when a button is clicked', () => {
    const button = screen.getByTestId('dataTestId-c')
    fireEvent.click(button)

    expect(mockHandleButtonClicked).toHaveBeenCalledTimes(1)
  })

  it('should render all buttons', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(20)
    BUTTONS_DATA.flat().forEach((button) => {
      const buttonElement = screen.getByTestId(button.dataTestId)
      expect(buttonElement).toBeInTheDocument()
    })
  })
})
