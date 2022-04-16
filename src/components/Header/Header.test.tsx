import { render } from '@testing-library/react'

import { Header } from 'components/Header'

describe('Header component', () => {
  test('renders Header', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})
