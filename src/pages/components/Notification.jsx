import React from 'react'
import { Alert, Snackbar } from '@mui/material'

const Notification = ({ openAlert, setOpenAlert }) => {
  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
    >
      <Alert
        onClose={handleCloseAlert}
        severity='error'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {'Unexpected end of expression'}
      </Alert>
    </Snackbar>
  )
}

export default Notification
