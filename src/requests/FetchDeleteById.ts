import { API } from 'constants/apiCall'

const FetchDeleteById = async (id: string): Promise<any> => {
  const res = await fetch(`${API}/products/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

export default FetchDeleteById
