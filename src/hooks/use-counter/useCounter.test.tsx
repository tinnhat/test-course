import { render, renderHook, screen } from '@testing-library/react'
import { useCounter } from './useCounter'
import { act } from 'react'
describe('useCounter', () => {
  test('should use counter', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('Should accept and render the same initial count', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 5 }))
    expect(result.current.count).toBe(5)
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCounter)
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })
  test('should decrement the count', () => {
    const { result } = renderHook(useCounter)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })
  test('should reset the count', () => {
    const { result } = renderHook(useCounter)
    act(() => {
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.count).toBe(0)
  })
})
