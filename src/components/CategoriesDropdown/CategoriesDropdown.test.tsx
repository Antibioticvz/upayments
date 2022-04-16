import { render } from '@testing-library/react'

import { CategoriesDropdown } from 'components/CategoriesDropdown'

const options = [
  {
    'createdAt': '2022-04-14T18:27:19.838Z',
    'name': 'Electronic',
    'id': '1',
  },
  {
    'createdAt': '2022-04-14T18:27:19.838Z',
    'name': 'Furnitures',
    'id': '2',
  },
  {
    'createdAt': '2022-04-14T18:27:19.838Z',
    'name': 'Clothing',
    'id': '3',
  },
  {
    'createdAt': '2022-04-14T18:27:19.838Z',
    'name': 'Accessories',
    'id': '4',
  },
]

describe('CategoriesDropdown component', () => {
  test('renders CategoriesDropdown', () => {
    const { asFragment } = render(
      <CategoriesDropdown
        options={options}
        selectedCategories={[]}
        handleSelect={value => console.log(value)}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders CategoriesDropdown / One selected', () => {
    const { asFragment } = render(
      <CategoriesDropdown
        options={options}
        selectedCategories={['Accessories']}
        handleSelect={value => console.log(value)}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders CategoriesDropdown / All selected', () => {
    const { asFragment } = render(
      <CategoriesDropdown
        options={options}
        selectedCategories={[
          'Electronic',
          'Furnitures',
          'Clothing',
          'Accessories',
        ]}
        handleSelect={value => console.log(value)}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
