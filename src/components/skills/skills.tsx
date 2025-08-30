import React, { use, useEffect } from 'react'
import { SkillProps } from './skills.types'

export const Skills = (props: SkillProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }, [])
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button >Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}
