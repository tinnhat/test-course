import { useState } from "react"
import { UseCounterProps } from "./userCounter.type"

export const useCounter = ({ initialCount = 0}: UseCounterProps= {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  const reset = () => setCount(initialCount)

  return { count, increment, decrement, reset }
}