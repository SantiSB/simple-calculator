import React from 'react'
import { Alert, Snackbar } from '@mui/material'

const Notification = ({ open, setOpen, notificationText }) => {
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
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
        {notificationText}
      </Alert>
    </Snackbar>
  )
}

export default Notification
