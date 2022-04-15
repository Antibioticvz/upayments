import { FC } from 'react'

import { FetchProducts, IProduct } from 'requests'

export const Home: FC = () => {
  const items = FetchProducts()

  return (
    <div>
      {items?.map((item: IProduct) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}
