import { API } from 'constants/apiCall'

import { suspend } from './suspend'

export interface ICategories {
  createdAt: number
  id: string
  name: string
}

const FetchCategories = async (): Promise<ICategories[]> => {
  const res = await fetch(`${API}/categories`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

export default suspend(FetchCategories())
