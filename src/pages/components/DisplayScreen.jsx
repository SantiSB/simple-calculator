import { Typography } from '@mui/material'

const DisplayScreen = ({ value }) => {
  return (
    <Typography
      variant='h3'
      className='display'
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'right',
        height: 70,
        width: 'auto',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </Typography>
  )
}

export default DisplayScreen
