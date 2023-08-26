import { Button } from '@mui/material'

const CalculatorButton = ({ handleButtonClick, buttonData }) => {
  return (
    <Button onClick={() => handleButtonClick(buttonData)} value={buttonData.value}>
      {buttonData.value}
    </Button>
  )
}

export default CalculatorButton
