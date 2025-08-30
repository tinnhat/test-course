import React from 'react'
import { render, screen } from '@testing-library/react'
import { User } from './user'

describe('Users', () => {
  test('renders correctly', () => {
    render(<User />)
    const textElement = screen.getByText('User')
    expect(textElement).toBeInTheDocument()
  })

  // test('renders a list of users', async () => {
  //   render(<User />)
  //   const users = await screen.findAllByRole('listitem')
  //   expect(users).toHaveLength(3)
  // })
})
