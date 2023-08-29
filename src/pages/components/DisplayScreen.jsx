import React, { useState, useEffect } from 'react'
import { Typography, Box, useTheme } from '@mui/material'

const DisplayScreen = ({ value }) => {
  const theme = useTheme()
  const [containerRef, setContainerRef] = useState(null)

  useEffect(() => {
    if (containerRef) {
      containerRef.scrollLeft =
        containerRef.scrollWidth - containerRef.clientWidth
    }

    const handleKeyDown = (event) => {
      if (containerRef) {
        if (event.key === 'ArrowLeft') {
          containerRef.scrollBy({
            left: -10,
          })
        } else if (event.key === 'ArrowRight') {
          containerRef.scrollBy({
            left: 10,
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [containerRef, value])

  return (
    <Box
      ref={setContainerRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 70,
        marginBottom: 3,
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          height: '3px',
        },
        '&::-webkit-scrollbar-track': {
          background: `${theme.palette.gray.main}`,
        },
        '&::-webkit-scrollbar-thumb': {
          background: `${theme.palette.white.main}`,
          borderRadius: '2px',
        },
      }}
    >
      <Typography
        variant='h3'
        className='display'
        sx={{
          whiteSpace: 'nowrap',
          marginLeft: 'auto',
        }}
      >
        {value}
      </Typography>
    </Box>
  )
}

export default DisplayScreen
