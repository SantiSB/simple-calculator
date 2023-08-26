import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserEvent } from '@testing-library/user-event'
import Notification from './Notification'

const notificationId = 'notification'

describe('Test for Notification component', () => {
  test('should render', () => {
    render(<Notification />)
    expect(screen.findByTestId(notificationId)).toBeTruthy()
  })
})