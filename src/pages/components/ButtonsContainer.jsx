import { Grid } from '@mui/material'
import React from 'react'
import { BUTTONS_DATA } from '../utils/buttonsData'
import CalculatorButton from './CalculatorButton'

const ButtonsContainer = ({ handleButtonClicked }) => {
  return (
    <Grid container spacing={2}>
      {BUTTONS_DATA.map((row, rowIndex) => (
        <Grid key={rowIndex} container item justifyContent='center'>
          {row.map((buttonData, columnIndex) => (
            <Grid key={columnIndex} item xs={3}>
              <CalculatorButton
                handleButtonClicked={handleButtonClicked}
                buttonData={buttonData}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}

export default ButtonsContainer
