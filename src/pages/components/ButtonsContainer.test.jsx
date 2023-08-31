import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonsContainer from './ButtonsContainer'

describe('ButtonsContainer', () => {
  const mockHandleButtonClicked = jest.fn()

  it('renders all buttons', () => {
    const { getAllByRole } = render(
      <ButtonsContainer handleButtonClicked={mockHandleButtonClicked} />
    )
    const buttons = getAllByRole('button')
    expect(buttons).toHaveLength(20)
  })

  it('calls handleButtonClicked when a button is clicked', () => {
    const { getByTestId } = render(
      <ButtonsContainer handleButtonClicked={mockHandleButtonClicked} />
    )

    const button = getByTestId('calculator-button-0-0')
    fireEvent.click(button)

    expect(mockHandleButtonClicked).toHaveBeenCalledTimes(1)
  })
})
