import { FC, Fragment, useState, useEffect } from 'react'

import { FetchProductsRaw, IProduct } from 'requests'
import { ProductGridItem } from 'components/ProductGridItem'
import { AddButton } from 'components/AddButton'
import { CategoriesDropdown } from 'components/CategoriesDropdown'
import FetchCategories from 'requests/FetchCategories'

export const Home: FC = () => {
  const [items, setItems] = useState<IProduct[]>([])
  const categories = FetchCategories()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const isSelected = (value: string) => selectedCategories.includes(value)

  const handleDeselect = (value: string) => {
    const selectedPersonsUpdated = selectedCategories.filter(el => el !== value)
    setSelectedCategories(selectedPersonsUpdated)
  }

  const handleSelect = (value: string) => {
    if (isSelected(value)) handleDeselect(value)
    else setSelectedCategories([...selectedCategories, value])
  }

  useEffect(() => {
    const loadItems = async () => {
      const allItems = await FetchProductsRaw()
      setItems(allItems)
    }
    loadItems()
  }, [])

  return (
    <>
      <CategoriesDropdown
        options={categories}
        selectedCategories={selectedCategories}
        handleSelect={handleSelect}
      />

      <div className="container mx-auto w-3/4" style={{ minHeight: 2000 }}>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items?.map(
            ({
              id,
              avatar,
              category,
              createdAt,
              description,
              developerEmail,
              name,
              price,
            }: IProduct) =>
              selectedCategories.length === 0 ? (
                <Fragment key={id}>
                  <ProductGridItem
                    avatar={avatar}
                    category={category}
                    createdAt={createdAt}
                    description={description}
                    developerEmail={developerEmail}
                    id={id}
                    name={name}
                    price={price}
                  />
                </Fragment>
              ) : (
                selectedCategories.length > 0 &&
                selectedCategories.includes(category) && (
                  <Fragment key={id}>
                    <ProductGridItem
                      avatar={avatar}
                      category={category}
                      createdAt={createdAt}
                      description={description}
                      developerEmail={developerEmail}
                      id={id}
                      name={name}
                      price={price}
                    />
                  </Fragment>
                )
              ),
          )}
        </div>
      </div>

      <AddButton />
    </>
  )
}
