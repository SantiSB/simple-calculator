import { Container, useTheme } from '@mui/material'
import Notification from './components/Notification'
import DisplayScreen from './components/DisplayScreen'
import useCalculator from './hooks/useCalculator'
import ButtonsContainer from './components/ButtonsContainer'
import { borderRadius } from '@mui/system'

const SimpleCalculator = () => {
  const { operation, handleButtonClicked, openAlert, setOpenAlert } =
    useCalculator()

  const theme = useTheme()

  return (
    <>
      <Container
        maxWidth='xs'
        sx={{
          backgroundColor: theme.palette.black.main,
          color: theme.palette.white.main,
          p: 5,
          border: '2px solid white',
          borderRadius: 5
        }}
      >
        <DisplayScreen value={operation} />
        <ButtonsContainer handleButtonClicked={handleButtonClicked} />
      </Container>
      <Notification openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </>
  )
}

export default SimpleCalculator
