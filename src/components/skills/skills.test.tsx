import { render, screen } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills component', () => {
  const skills = ['JavaScript', 'TypeScript', 'React']
  test('should render the skills list', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  test('render a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(skills.length)
  })
  test('should render login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: /login/i })
    expect(loginButton).toBeInTheDocument()
  })
  test('should not render start learning button', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', { name: /start learning/i })
    expect(startLearningButton).not.toBeInTheDocument()
  })
  test('should render start learning button after 1 second', async () => {
    render(<Skills skills={skills} />)
    // screen.debug()
    const startLearningButton = await screen.findByRole('button', { name: /start learning/i }, { timeout: 2000 })
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})
