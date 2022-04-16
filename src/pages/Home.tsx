import { FC, Fragment } from 'react'

import { FetchProducts, IProduct } from 'requests'
import { ProductGridItem } from 'components/ProductGridItem'
import { AddButton } from 'components/AddButton'

export const Home: FC = () => {
  const items = FetchProducts()

  return (
    <>
      <div className="container mx-auto w-3/4" style={{ minHeight: 2000 }}>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items?.map((item: IProduct) => (
            <Fragment key={item.id}>
              <ProductGridItem
                avatar={item?.avatar}
                category={item?.category}
                createdAt={item?.createdAt}
                description={item?.description}
                developerEmail={item?.developerEmail}
                id={item?.id}
                name={item?.name}
                price={item?.price}
              />
            </Fragment>
          ))}
        </div>
      </div>

      <AddButton />
    </>
  )
}
