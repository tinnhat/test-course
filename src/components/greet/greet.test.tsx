import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

// test('Greet component renders correctly', () => {
//   render(<Greet />);
//   const divElement = screen.getByText('Hello');
//   expect(divElement).toBeInTheDocument();
// });

describe('Greet Component Tests', () => {
  test('Greet component renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/i)
    expect(textElement).toBeInTheDocument()
  })
  describe('Greet Component with Props', () => {
    test('Greet component does not render incorrect text', () => {
      render(<Greet name='John' />)
      const textElement = screen.queryByText('Hello John')
      expect(textElement).toBeInTheDocument()
    })
  })
})
