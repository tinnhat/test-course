- summary test using jest

* Có 3 loại test:

  - Unit test
  - Integration test
  - E2E test

* TDD (Test Driven Development)

- Các step cơ bản khi viết test:

  - Render component
  - Tìm element được render bởi component
  - Xác nhận lại có tìm thấy component được render ở step 2 hay không
    -> Fail or pass test

- Các function test:

* Để tìm một element trong page: (sync)
  - GetBy:
    - getByRole → tìm theo vai trò (role) như button, textbox, heading

```ts
const setButton = screen.getByRole('button', { name: /set/i })
```

    + getByLabelText → tìm theo label gắn với form control

```ts
const termsElement = screen.getByLabelText('I agree to the terms and conditions')
```

Lưu ý: có thể sẽ bị trùng label hoặc textcontent, sử dụng kèm theo selector để chi tiết

```ts
const nameElement = screen.getByLabelText('tesst', { selector: 'input' })
```

    + getByPlaceholderText → tìm theo placeholder trong input/textarea.

```ts
const testElement = screen.getByPlaceholderText('input in here')
```

    + getByText → tìm theo nội dung text hiển thị

```ts
const textElement = screen.getByText('text content')
```

    + getByDisplayValue → tìm theo giá trị hiện tại của input/textarea/select

```ts
const valueElement = screen.getByDisplayValue('test123')
```

    + getByAltText → tìm theo thuộc tính alt (dùng nhiều cho <img>)

```ts
const imageElement = screen.getByAltText('Description_image')
```

    + getByTitle → tìm theo title attribute

```ts
const spanElement = screen.getByTitle('this is a test')
```

    + getByTestId → tìm theo data-testid (nên dùng hạn chế)

```ts
;` <div data-testid='custom-element'>Custom HTML element</div>`
const customElement = screen.getByTestId('custom-element')
```

- Để nhiều element trong page (tương tự như getBy...):
  - getAllByRole
  - getAllByLabelText
  - getAllByPlaceholderText
  - getAllByText
  - getAllByDisplayValue
  - getAllByAltText
  - getAllByTitle
  - getAllByTestId
-

- Độ ưu tiên khi sử dụng queries:

* getByRole
* getByLabelText
* getByPlaceholderText
* getByText
* getByDisplayValue
* getByAltText
* getByTitle
* getByTestId

- Để tìm một element trong page: (async):

* queryBy (Không tìm thấy trả về null)
* findBy (trả về promise, không tìm thấy trả về error)
  -> các phương thức con của findBy và queryBy cũng giống như getBy
  ex: queryByRole, queryAllByRole / findByRole, findAllByRole

* có thể track user tương tác qua pointer hoặc keyboard:

```ts
test('should increment the counter value when button is clicked', async () => {
  render(<Counter />)
  const buttonElement = screen.getByRole('button', { name: /increment/i })
  await user.click(buttonElement)
  const counterElement = screen.getByText(/counter: 1/i)
  expect(counterElement).toBeInTheDocument()
})

test('elements are focus in the right order', async () => {
  render(<Counter />)
  const incrementButton = screen.getByRole('button', { name: /increment/i })
  const amountInput = screen.getByRole('spinbutton')
  const setButton = screen.getByRole('button', { name: /set/i })

  await user.tab()
  expect(incrementButton).toHaveFocus()

  await user.tab()
  expect(amountInput).toHaveFocus()

  await user.tab()
  expect(setButton).toHaveFocus()
})
```

- Đối với các provider (MUI, Antd, ...) test theme:

```ts
//MUI
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { AppProvider } from './components/providers/app-provider'

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AppProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }

describe('MuiMode', () => {
  it('renders the current theme mode', () => {
    render(<MuiMode />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('dark mode')
  })
})
```

Đối với các hook/custom hook: react hỗ trợ 'act' để tương tác và renderHook trong jest

```ts
import { act } from 'react'
test('Should accept and render the same initial count', () => {
  const { result } = renderHook(() => useCounter({ initialCount: 5 }))
  expect(result.current.count).toBe(5)
})

//custom hook
import { useState } from 'react'
import { UseCounterProps } from './userCounter.type'

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialCount)

  return { count, increment, decrement, reset }
}

//test
test('should increment the count', () => {
  const { result } = renderHook(useCounter)
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
```

- Mocking function test: jest hỗ trợ các function(giả lập func)

```ts
test('Handlers are call', async () => {
  const handleIncrement = jest.fn()
  const handleDecrement = jest.fn()
  render(
    <CounterTwo count={0} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
  )
  const incrementButton = screen.getByText('Increment')
  const decrementButton = screen.getByText('Decrement')
  await user.click(incrementButton)
  expect(handleIncrement).toHaveBeenCalledTimes(1)
  await user.click(decrementButton)
  expect(handleDecrement).toHaveBeenCalledTimes(1)
})
```

- Mocking data fake (API):

```ts
test('renders a list of users', async () => {
  render(<User />)
  const users = await screen.findAllByRole('listitem')
  expect(users).toHaveLength(3)
})
```

- Static test analysis:
  + Typescript
  + ESlint
  + Prettier
  + Husky
  + lint-staged
  