import { render, screen } from '@testing-library/react'
import { Application } from './application'

describe('Application', () => {
  test('should render the application form', () => {
    render(<Application />)
    // screen.getByRole('textbox', { name: 'Name' });
    // screen.getByRole('combobox', { name: 'Job Location' });
    // screen.getByRole('button', { name: 'Submit' });
    // screen.getByRole('checkbox', { name: 'I agree to the terms and conditions' });

    const nameElement = screen.getByLabelText('tesst', { selector: 'input' })
    expect(nameElement).toBeInTheDocument()

    const testElement = screen.getByPlaceholderText('input in here')
    expect(testElement).toBeInTheDocument()

    const termsElement = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsElement).toBeInTheDocument()

    const textElement = screen.getByText('text content' )
    expect(textElement).toBeInTheDocument()

    const valueElement = screen.getByDisplayValue('test123')
    expect(valueElement).toBeInTheDocument()

    const imageElement = screen.getByAltText('Description_image')
    expect(imageElement).toBeInTheDocument()

    const spanElement = screen.getByTitle('this is a test')
    expect(spanElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    //to get multiple
    // get all
  })
})
