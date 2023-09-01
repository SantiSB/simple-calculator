import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CalculatorButton from './CalculatorButton'
import '@testing-library/jest-dom/extend-expect'

describe('CalculatorButton', () => {
  const buttonData = {
    label: '7',
    type: 'number',
    value: '7',
  }

  it('should render the button with the correct label', () => {
    const { getByText } = render(
      <CalculatorButton
        handleButtonClicked={() => {}}
        buttonData={buttonData}
      />
    )

    const buttonElement = getByText('7')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should call handleButtonClicked when the button is clicked', () => {
    const handleButtonClickedMock = jest.fn()

    const { getByText } = render(
      <CalculatorButton
        handleButtonClicked={handleButtonClickedMock}
        buttonData={buttonData}
      />
    )

    const buttonElement = getByText('7')
    fireEvent.click(buttonElement)

    expect(handleButtonClickedMock).toHaveBeenCalledWith(buttonData)
  })
})
