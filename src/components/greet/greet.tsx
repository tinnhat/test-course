import React from 'react'
import { GreetProps } from './greet.types'

export const Greet = (props: GreetProps) => {
  const { name } = props
  return <div>Hello {name ?? "Guest"}</div>
}
