import React from 'react'

export const Counter = () => {
  const [count, setCount] = React.useState(0)
  const [amount, setAmount] = React.useState(1)
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  )
}
