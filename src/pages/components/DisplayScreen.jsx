import { Typography } from '@mui/material'

const DisplayScreen = ({ value }) => {
  return (
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
  )
}

export default DisplayScreen
