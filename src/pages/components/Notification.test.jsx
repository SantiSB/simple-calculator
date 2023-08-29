import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Notification from './Notification'

const mockSetOpenAlert = jest.fn()

describe('Notification component', () => {
  it('renders without errors', () => {
    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)
  })

  it('displays the error message', () => {
    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)

    const errorMessage = document.querySelector('.MuiAlert-message');
    expect(errorMessage.textContent).toBe('Unexpected end of expression');
  })

  it('closes the notification on clicking close button', async () => {
    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)

    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(mockSetOpenAlert).toHaveBeenCalledWith(false)
    })
  })

  it('closes the notification after autoHideDuration', async () => {
    jest.useFakeTimers()

    render(<Notification openAlert={true} setOpenAlert={mockSetOpenAlert} />)

    jest.advanceTimersByTime(6000)

    await waitFor(() => {
      expect(mockSetOpenAlert).toHaveBeenCalledWith(false)
    })
  })
})
