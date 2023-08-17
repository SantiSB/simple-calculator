import { useState } from 'react'
import '../styles/SimpleCalculator.css'
import { Container, Grid } from '@mui/material'
import Notification from './components/Notification'
import CalculatorButton from './components/CalculatorButton'
import DisplayScreen from './components/DisplayScreen'

const SimpleCalculator = () => {
  const [value, setValue] = useState(0)
  const [operator, setOperator] = useState()
  const [open, setOpen] = useState(false)

  const handleOperator = (operatorValue) => {
    setOperator(operatorValue)
    setValue(0)
  }

  const handleNumberClick = (buttonValue) => {
    if (value === 0 || operator) {
      setValue(buttonValue)
    } else if (value.length <= 6) {
      setValue(value + buttonValue)
    } else {
      setOpen(true)
    }
  }

  const handleSpecialClick = (buttonValue) => {
    const specialHandlers = {
      '+/-': handleToggleSign,
      '%': handlePercentage,
      AC: handleClear,
    }

    const specialHandler = specialHandlers[buttonValue]
    if (specialHandler) {
      specialHandler()
    } else {
      handleOperator(buttonValue)
    }
  }

  const handleToggleSign = () => {
    setValue(value * -1)
  }

  const handlePercentage = () => {
    setValue(value / 100)
  }

  const handleClear = () => {
    setValue(0)
    setOperator()
  }

  const handleButtonClick = (buttonValue) => {
    if (typeof buttonValue === 'number' || buttonValue === '.') {
      handleNumberClick(buttonValue)
    } else {
      handleSpecialClick(buttonValue)
    }
  }

  const buttonData = [
    ['%', 'CE', 'C', '<<'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, '.', '='],
  ]

  return (
    <div className='calculator'>
      <Container maxWidth='xs'>
        <div className='container'>
          <DisplayScreen value={value} />
          <Grid container spacing={2}>
            {buttonData.map((row, rowIndex) => (
              <Grid key={rowIndex} container item justifyContent='center'>
                {row.map((buttonValue, columnIndex) => (
                  <Grid key={columnIndex} item xs={3}>
                    <CalculatorButton
                      handleButtonClick={handleButtonClick}
                      buttonValue={buttonValue}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
      <Notification open={open} setOpen={setOpen} />
    </div>
  )
}

export default SimpleCalculator
