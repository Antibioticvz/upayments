import { API } from 'constants/apiCall'

import { suspend } from './suspend'

export interface IProduct {
  avatar: string
  category: string
  createdAt: number | string
  description: string
  developerEmail: string
  id: string
  name: string
  price: string
}

const FetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${API}/products`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

export default suspend(FetchProducts())
