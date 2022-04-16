import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES_HREF } from 'constants/routes'
import { IProduct } from 'requests'

export const ProductGridItem: FC<IProduct> = ({ id, name, avatar, price }) => {
  const navigate = useNavigate()

  const getRoundedPrice = useCallback(
    () =>
      Number(
        `${price}`.replace(',', '.').replace(/[^0-9&.]/g, '') || 0,
      ).toFixed(2),
    [price],
  )

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex justify-between flex-col"
      onKeyPress={e => e.preventDefault()}
      onClick={() => navigate(`${ROUTES_HREF.PRODUCT}/${id}`)}
    >
      <img
        src={avatar}
        className="max-w-full h-auto rounded-2xl bg-white border-2 border-gray-300"
        alt={name}
      />
      <div>
        <p className="text-xl text-left mt-5 mb-2">{name}</p>
        <p className="text-xl text-center">$ {getRoundedPrice()}</p>
      </div>
    </div>
  )
}
