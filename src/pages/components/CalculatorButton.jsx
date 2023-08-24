import { Button } from '@mui/material'

const CalculatorButton = ({ handleButtonClick, buttonValue }) => {
  return (
    <Button
      className={`${
        typeof buttonValue === 'number'
          ? 'number'
          : buttonValue === '='
          ? 'calculate'
          : 'function'
      }`}
      onClick={() => handleButtonClick(buttonValue)}
      value={buttonValue}
    >
      {buttonValue}
    </Button>
  )
}

export default CalculatorButton
