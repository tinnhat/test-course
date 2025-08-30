import { render, screen } from '@testing-library/react'
import { CounterTwo } from './counter-two'
import user from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('should render correctly', () => {
    render(<CounterTwo count={0} />)
    expect(screen.getByText('Counter Two')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  test('Handlers are call',async () => {
    const handleIncrement = jest.fn()
    const handleDecrement = jest.fn()
    render(<CounterTwo count={0} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />)
    const incrementButton = screen.getByText('Increment')
    const decrementButton = screen.getByText('Decrement')
    await user.click(incrementButton)
    expect(handleIncrement).toHaveBeenCalledTimes(1)
    await user.click(decrementButton)
    expect(handleDecrement).toHaveBeenCalledTimes(1)
  })
})
