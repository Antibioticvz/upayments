import FetchProducts, { IProduct } from './FetchProducts'
import FetchProductById from './FetchProductById'
import FetchDeleteById from './FetchDeleteById'
import FetchCreateNew, { INewProduct } from './FetchCreateNew'
import FetchCategories, { ICategories } from './FetchCategories'

export {
  FetchProducts,
  FetchCategories,
  FetchProductById,
  FetchDeleteById,
  FetchCreateNew,
}
export type { IProduct, ICategories, INewProduct }
