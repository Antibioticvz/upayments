import { API } from 'constants/apiCall'

import { IProduct } from 'requests'

const FetchProductById = async (id: string): Promise<IProduct> => {
  const res = await fetch(`${API}/products/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

export default FetchProductById
