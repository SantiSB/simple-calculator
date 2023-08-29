import { Box, Container, useTheme } from '@mui/material'
import Notification from './components/Notification'
import DisplayScreen from './components/DisplayScreen'
import useCalculator from './hooks/useCalculator'
import ButtonsContainer from './components/ButtonsContainer'

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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            border: `2px solid ${theme.palette.gray.main}`,
            p: 2.5,
            borderRadius: 5,
            width: '100%', 
            overflow: 'auto',
          }}
        >
          <DisplayScreen value={operation} />
          <ButtonsContainer handleButtonClicked={handleButtonClicked} />
        </Box>
      </Container>
      <Notification openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </>
  )
}

export default SimpleCalculator
