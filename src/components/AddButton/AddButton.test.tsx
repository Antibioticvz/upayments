import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { AddButton } from 'components/AddButton'

describe('ProductGridItem component', () => {
  test('renders ProductGridItem', () => {
    const { asFragment } = render(
      <Router>
        <AddButton />
      </Router>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
