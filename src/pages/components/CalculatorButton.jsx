import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const CalculatorButton = ({ handleButtonClicked, buttonData }) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.white.main,
    backgroundColor:
      buttonData.type === 'number'
        ? theme.palette.gray.main
        : theme.palette.orange.main,
    '&:hover': {
      backgroundColor:
        buttonData.type === 'number'
          ? theme.palette.gray.secondary
          : theme.palette.orange.secondary,
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
    >
      <Typography>{buttonData.value}</Typography>
    </ColorButton>
  )
}

export default CalculatorButton
