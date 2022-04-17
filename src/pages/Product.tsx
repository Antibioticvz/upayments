import { FC, useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { FetchDeleteById, FetchProductById, IProduct } from 'requests'

type IParams = {
  id: string
}

export const Product: FC = () => {
  const { id } = useParams<IParams>()
  const navigate = useNavigate()
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

      <br />
      {id && (
        <button
          type="button"
          className="inline-block p-3 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
          onClick={() =>
            // ToDo Check how it works
            FetchDeleteById(id).then(() => setTimeout(() => navigate(-1), 600))
          }
        >
          Delete this Product
        </button>
      )}
    </div>
  )
}
