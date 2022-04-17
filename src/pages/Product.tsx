import { FC, useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { FetchProductById, IProduct } from 'requests'

type IParams = {
  id: string
}

export const Product: FC = () => {
  const { id } = useParams<IParams>()
  const [item, setItem] = useState<IProduct | null>()

  const getRoundedPrice = useCallback(
    () =>
      Number(
        `${item?.price}`.replace(',', '.').replace(/[^0-9&.]/g, '') || 0,
      ).toFixed(2),
    [item?.price],
  )

  useEffect(() => {
    const getItem = async () => {
      const req = await FetchProductById(id || '')
      setItem(typeof req !== 'string' ? req : null)
    }

    getItem()
  }, [id])

  if (!item)
    return (
      <h2 className="font-medium leading-tight text-center text-4xl mt-0 mb-2 text-red-600">
        Nothing to see here!
      </h2>
    )

  return (
    <div className="container mx-auto w-3/4">
      <div className="flex flex-col md:flex-row">
        <img
          src={item.avatar}
          className="max-w-full h-auto rounded-2xl bg-white border-2 border-gray-300"
          alt={item.name}
        />

        <div className="flex justify-between flex-col mr-5 ml-5">
          <h1 className="font-medium leading-tight text-center text-4xl mt-0 mb-2 text-black">
            {item.name}
          </h1>

          <div>
            <p className="text-xl text-center md:text-left">
              $ {getRoundedPrice()}
            </p>
          </div>
        </div>
      </div>

      <hr className="m-5 " style={{ border: '1px solid black' }} />

      <h2 className="font-medium leading-tight text-center text-2xl mt-2 mb-2 text-black">
        Description
      </h2>
      <p className="text-gray-500">{item.description}</p>
    </div>
  )
}
