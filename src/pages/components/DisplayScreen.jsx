import React, { useEffect, useRef } from 'react'
import { Typography, Box, useTheme } from '@mui/material'

const DisplayScreen = ({ value }) => {
  const theme = useTheme()
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft =
        containerRef.current.scrollWidth - containerRef.current.clientWidth
    }
    const handleKeyDown = (event) => {
      if (containerRef.current) {
        if (event.key === 'ArrowLeft') {
          containerRef.current.scrollLeft -= 10 
        } else if (event.key === 'ArrowRight') {
          containerRef.current.scrollLeft += 10 
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [value])

  return (
    <Box
      ref={containerRef}
      data-testId={`container-display-value`}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          background: `${theme.palette.grey.main}`,
        },
        '&::-webkit-scrollbar-thumb': {
          background: `${theme.palette.primary.main}`,
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
