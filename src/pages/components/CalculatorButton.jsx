import { Button } from '@mui/material'

const CalculatorButton = ({ handleButtonClicked, buttonData }) => {
  return (
    <Button onClick={() => handleButtonClicked(buttonData)} value={buttonData.value}>
      {buttonData.value}
    </Button>
  )
}

export default CalculatorButton
