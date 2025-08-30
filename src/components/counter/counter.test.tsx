import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from './counter'

describe('Counter component', () => {
  test('should render the counter with initial value 0', () => {
    render(<Counter />)
    const counterElement = screen.getByText(/counter: 0/i)
    expect(counterElement).toBeInTheDocument()
    const buttonElement = screen.getByRole('button', { name: /increment/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test('should increment the counter value when button is clicked', async () => {
    render(<Counter />)
    const buttonElement = screen.getByRole('button', { name: /increment/i })
    await user.click(buttonElement)
    const counterElement = screen.getByText(/counter: 1/i)
    expect(counterElement).toBeInTheDocument()
  })

  test('render a count of 10 after clicking the set button',() => {
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    user.type(amountInput, '{selectall}10')
    const buttonElement = screen.getByRole('button', { name: /set/i })
    user.click(buttonElement)
    const counterElement = screen.getByText(/counter: 10/i)
    expect(counterElement).toBeInTheDocument()
  })

  test('elements are focus in the right order', async () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: /set/i })

    await user.tab()
    expect(incrementButton).toHaveFocus()

    await user.tab()
    expect(amountInput).toHaveFocus()

    await user.tab()
    expect(setButton).toHaveFocus()
  })
})