import { useState } from 'react'
import '../styles/SimpleCalculator.css'
import { Container, Grid } from '@mui/material'
import Notification from './components/Notification'
import DisplayScreen from './components/DisplayScreen'
import useCalculator from './hooks/useCalculator'
import ButtonsContainer from './components/ButtonsContainer'

const SimpleCalculator = () => {
  const [open, setOpen] = useState(false)
  const { operation, handleButtonClick } = useCalculator()

  return (
    <div className='calculator'>
      <Container maxWidth='xs'>
        <div className='container'>
          <DisplayScreen value={operation} />
          <ButtonsContainer handleButtonClick={handleButtonClick}/>
        </div>
      </Container>
      <Notification open={open} setOpen={setOpen} notificationText={'Error'} />
    </div>
  )
}

export default SimpleCalculator
