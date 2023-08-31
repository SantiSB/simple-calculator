import React from 'react'
import { Box, Container, useTheme } from '@mui/material'
import Notification from './components/Notification'
import useCalculator from './hooks/useCalculator'
import ButtonsContainer from './components/ButtonsContainer'
import DisplayScreen from './components/DisplayScreen'

const SimpleCalculator = () => {
  const { operation, handleButtonClicked, openAlert, setOpenAlert } =
    useCalculator()

  const theme = useTheme()

  return (
    <>
      <Container
        sx={{
          backgroundColor: theme.palette.black.main,
          color: theme.palette.primary.main,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          overflow: 'hidden',
          width: 350,
        }}
        data-testId={'simple-calculator'}
      >
        <Box
          sx={{
            border: `2px solid ${theme.palette.grey.main}`,
            borderRadius: 5,
            maxWidth: '95%',
            maxHeight: '80vh',
          }}
        >
          <Box sx={{ margin: 1.5 }}>
            <DisplayScreen value={operation} />
            <ButtonsContainer handleButtonClicked={handleButtonClicked} />
          </Box>
        </Box>
      </Container>
      <Notification openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </>
  )
}

export default SimpleCalculator
