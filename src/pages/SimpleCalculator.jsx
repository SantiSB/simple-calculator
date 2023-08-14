import React, { useState } from 'react'
import '../styles/SimpleCalculator.css'
import Container from '@mui/material/Container'
import { Alert, Grid, Snackbar, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

const SimpleCalculator = () => {
  const [value, setValue] = useState(0)
  const [operator, setOperator] = useState()
  const [prevValue, setPrevValue] = useState(0)

  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const typeNumber = (e) => {
    const input = e.target.value
    value === 0
      ? setValue(input)
      : value.length > 6
      ? setOpen(true)
      : setValue(value + input)
  }

  const clear = () => {
    setValue(0)
    setOperator()
  }

  const handleOperator = (e) => {
    const operatorValue = e.target.value
    setOperator(operatorValue)
    setPrevValue(value)
    setValue(0)
  }

  const calculate = () => {
    switch (operator) {
      case '/':
        setValue(parseFloat(prevValue) / parseFloat(value))
        setOperator()
        break
      case 'X':
        setValue(parseFloat(prevValue) * parseFloat(value))
        setOperator()
        break
      case '-':
        setValue(parseFloat(prevValue) - parseFloat(value))
        setOperator()
        break
      case '+':
        setValue(parseFloat(prevValue) + parseFloat(value))
        setOperator()
        break
      case '=':
        setOperator()
        break
      default:
        break
    }
  }

  const changeSign = () => {
    setValue(value * -1)
  }

  const percentage = () => {
    setValue(value / 100)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='calculator'>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='error'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Is not possible type more than 6 digits
          </Alert>
        </Snackbar>
        <Container maxWidth='xs'>
          <div className='container'>
            <Typography
              variant='h3'
              className='display'
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '7rem',
                width: '100%',
              }}
            >
              {value}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                {' '}
                <button className='function' onClick={clear}>
                  AC
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='function' onClick={changeSign} value={'+/-'}>
                  +/-
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='function' onClick={percentage} value={'%'}>
                  %
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button
                  className='function'
                  onClick={handleOperator}
                  value={'/'}
                >
                  /
                </button>
              </Grid>

              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={7}>
                  7
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={8}>
                  8
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={9}>
                  9
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button
                  className='operator'
                  onClick={handleOperator}
                  value={'X'}
                >
                  X
                </button>
              </Grid>

              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={4}>
                  4
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={5}>
                  5
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={6}>
                  6
                </button>
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button
                  className='operator'
                  onClick={handleOperator}
                  value={'-'}
                >
                  -
                </button>
              </Grid>

              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={1}>
                  1
                </button>{' '}
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={2}>
                  2
                </button>{' '}
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={3}>
                  3
                </button>{' '}
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button
                  className='operator'
                  onClick={handleOperator}
                  value={'+'}
                >
                  +
                </button>{' '}
              </Grid>

              <Grid item xs={6}>
                {' '}
                <button className='number' onClick={typeNumber} value={0}>
                  0
                </button>{' '}
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='number' onClick={typeNumber} value={'.'}>
                  ,
                </button>{' '}
              </Grid>
              <Grid item xs={3}>
                {' '}
                <button className='calculate' onClick={calculate} value='='>
                  =
                </button>{' '}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default SimpleCalculator
