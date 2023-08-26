import '../styles/SimpleCalculator.css'
import { Container, Grid } from '@mui/material'
import Notification from './components/Notification'
import DisplayScreen from './components/DisplayScreen'
import useCalculator from './hooks/useCalculator'
import ButtonsContainer from './components/ButtonsContainer'

const SimpleCalculator = () => {
  const { operation, handleButtonClicked, openAlert, setOpenAlert } =
    useCalculator()

  return (
    <div className='calculator'>
      <Container maxWidth='xs'>
        <div className='container'>
          <DisplayScreen value={operation} />
          <ButtonsContainer handleButtonClicked={handleButtonClicked} />
        </div>
      </Container>
      <Notification openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </div>
  )
}

export default SimpleCalculator
