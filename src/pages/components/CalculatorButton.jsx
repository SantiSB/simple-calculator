import { Button, Typography, useTheme } from '@mui/material'

const CalculatorButton = ({ handleButtonClicked, buttonData }) => {
  const theme = useTheme()

  return (
    <Button
      onClick={() => handleButtonClicked(buttonData)}
      value={buttonData.value}
      sx={{
        color: theme.palette.white.main,
        background:
          buttonData.type === 'number'
            ? theme.palette.gray.main
            : theme.palette.orange.main,
        borderRadius: 50,
        height: 50,
        width: 50,
      }}
    >
      <Typography>{buttonData.value}</Typography>
    </Button>
  )
}

export default CalculatorButton
