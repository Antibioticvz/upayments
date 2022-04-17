import { API } from 'constants/apiCall'

export interface INewProduct {
  name: string
  description: string
  avatar: string
  category: string
  price: string
  developerEmail: string
}

const FetchCreateNew = async ({
  name,
  description,
  avatar,
  category,
  price,
  developerEmail,
}: INewProduct): Promise<any> => {
  const res = await fetch(`${API}/products/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      avatar,
      category,
      price,
      developerEmail,
    }),
  })

  return res.json()
}

export default FetchCreateNew
