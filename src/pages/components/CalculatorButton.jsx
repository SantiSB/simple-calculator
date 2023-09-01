import React from 'react'
import { Button, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

const CalculatorButton = ({ handleButtonClicked, buttonData, dataTestId }) => {
  const theme = useTheme()
  const ColorButton = styled(Button)(() => ({
    color: theme.palette.primary.main,
    backgroundColor:
      buttonData.type === 'number'
        ? theme.palette.grey.main
        : theme.palette.secondary.main,
    '&:hover': {
      backgroundColor:
        buttonData.type === 'number'
          ? theme.palette.grey.secondary
          : theme.palette.secondary.secondary,
    },
    borderRadius: 50,
    height: 50,
    width: 30,
  }))

  return (
    <ColorButton
      variant='contained'
      onClick={() => handleButtonClicked(buttonData)}
      value={buttonData.value}
      data-testId={dataTestId}
    >
      <Typography>{buttonData.label}</Typography>
    </ColorButton>
  )
}

export default CalculatorButton
