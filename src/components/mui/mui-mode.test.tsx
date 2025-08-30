import { render, screen } from '../../test-utils'
import { MuiMode } from './mui-mode'
import { AppProvider } from '../providers/app-provider'

describe('MuiMode', () => {
  it('renders the current theme mode', () => {
    render(<MuiMode />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('dark mode')
  })
})
