import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserEvent } from '@testing-library/user-event'
import Notification from './Notification'

describe('Test for Notification component', () => {
  test('should render', () => {
    render(<Notification />)
  })
})
