import { FC } from 'react'
import { Link } from 'react-router-dom'

export const NoMatch: FC = () => (
  <div>
    <h2 className="font-medium leading-tight text-center text-4xl mt-0 mb-2 text-red-600">
      Nothing to see here!
    </h2>
    <p className="no-underline hover:underline text-center">
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
)
