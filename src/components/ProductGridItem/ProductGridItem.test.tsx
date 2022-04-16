import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { ProductGridItem } from 'components/ProductGridItem'

describe('ProductGridItem component', () => {
  test('renders ProductGridItem', () => {
    const { asFragment } = render(
      <Router>
        <ProductGridItem
          avatar="	https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/121967_large.jpg"
          category="phone"
          createdAt={230203}
          description="text description"
          developerEmail="eee@gmail.com"
          id="12345"
          name="IPhone 12"
          price="123"
        />
      </Router>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders ProductGridItem / Price replace non digits', () => {
    const { asFragment } = render(
      <Router>
        <ProductGridItem
          avatar="	https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/121967_large.jpg"
          category="phone"
          createdAt={230203}
          description="text description"
          developerEmail="eee@gmail.com"
          id="12345"
          name="IPhone 12"
          price="!$ 123.44 $$"
        />
      </Router>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
