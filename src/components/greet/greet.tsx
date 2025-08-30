import React from 'react'

export const Greet = (props: GreetProps) => {
  const { name } = props
  return <div>Hello {name ?? "Guest"}</div>
}
