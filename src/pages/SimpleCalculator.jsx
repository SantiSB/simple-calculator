import { useState } from 'react'
import '../styles/SimpleCalculator.css'
import { Container, Grid } from '@mui/material'
import Notification from './components/Notification'
import CalculatorButton from './components/CalculatorButton'
import DisplayScreen from './components/DisplayScreen'
import useCalculator from './hooks/useCalculator'
import { BUTTONS_DATA } from './utils/buttonsData'

const SimpleCalculator = () => {
  const [open, setOpen] = useState(false)
  const { operation, handleButtonClick } = useCalculator()

  return (
    <div className='calculator'>
      <Container maxWidth='xs'>
        <div className='container'>
          <DisplayScreen value={operation} />
          <Grid container spacing={2}>
            {BUTTONS_DATA.map((row, rowIndex) => (
              <Grid key={rowIndex} container item justifyContent='center'>
                {row.map((buttonData, columnIndex) => (
                  <Grid key={columnIndex} item xs={3}>
                    <CalculatorButton
                      handleButtonClick={handleButtonClick}
                      buttonData={buttonData}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
      <Notification open={open} setOpen={setOpen} notificationText={'Error'} />
    </div>
  )
}

export default SimpleCalculator
