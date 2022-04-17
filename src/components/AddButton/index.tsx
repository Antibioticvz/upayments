import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import './styles.css'

export const AddButton: FC = () => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block p-3 bg-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
      id="btn-back-to-top"
      onClick={() => navigate(ROUTES.CREATE)}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="w-7 h-7"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 350"
      >
        <path
          fill="currentColor"
          d="M349.03,141.226v66.579c0,5.012-4.061,9.079-9.079,9.079H216.884v123.067c0,5.019-4.067,9.079-9.079,9.079h-66.579   c-5.009,0-9.079-4.061-9.079-9.079V216.884H9.079c-5.016,0-9.079-4.067-9.079-9.079v-66.579c0-5.013,4.063-9.079,9.079-9.079   h123.068V9.079c0-5.018,4.069-9.079,9.079-9.079h66.579c5.012,0,9.079,4.061,9.079,9.079v123.068h123.067   C344.97,132.147,349.03,136.213,349.03,141.226z"
        />
      </svg>
    </button>
  )
}
