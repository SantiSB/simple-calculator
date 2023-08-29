import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Notification from './Notification'

const mockSetOpenAlert = jest.fn()

describe('Notification component', () => {
  it('should open snackbar', async () => {
    render(<Notification openAlert={false} setOpenAlert={mockSetOpenAlert} />)
    mockSetOpenAlert(true)
    await waitFor(() => {
      expect(mockSetOpenAlert).toHaveBeenCalledWith(true)
    })
  })
  it('should display the error message', () => {
    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)

    const errorMessage = document.querySelector('.MuiAlert-message')
    expect(errorMessage.textContent).toBe('Unexpected end of expression')
  })

  it('should close the notification on clicking close button', async () => {
    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)

    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(mockSetOpenAlert).toHaveBeenCalledWith(false)
    })
  })

  it('should close the notification after autoHideDuration', async () => {
    jest.useFakeTimers()

    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)

    jest.advanceTimersByTime(6000)

    await waitFor(() => {
      expect(mockSetOpenAlert).toHaveBeenCalledWith(false)
    })
  })
})
