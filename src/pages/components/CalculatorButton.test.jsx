import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import CalculatorButton from './CalculatorButton'
import '@testing-library/jest-dom/extend-expect'

describe('CalculatorButton', () => {
  const mockedButtonData = {
    dataTestId: 'dataTestId-7',
    label: '7',
    type: 'number',
    value: '7',
  }

  it('should call handleButtonClicked once when the button is clicked', () => {
    const handleButtonClickedMock = jest.fn()

    render(
      <CalculatorButton
        handleButtonClicked={handleButtonClickedMock}
        buttonData={mockedButtonData}
      />
    )

    const buttonElement = screen.getByText('7')
    fireEvent.click(buttonElement)

    expect(handleButtonClickedMock).toHaveBeenCalledWith(mockedButtonData)
    expect(handleButtonClickedMock).toHaveBeenCalledTimes(1)
  })
})
