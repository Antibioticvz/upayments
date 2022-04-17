import { FC, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Create, Product, NoMatch } from 'pages'
import { Header } from 'components/Header'
import { ROUTES } from 'constants/routes'

import 'assets/main.css'
import 'assets/tailwind.css'

const HomeLazyPage = lazy(() =>
  import('pages/Home').then(({ Home }) => {
    return { default: Home }
  }),
)
const App: FC = () => (
  <div>
    <Header />

    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <Suspense
            fallback={
              <div className="flex">
                <img
                  className="m-auto"
                  src="https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif"
                  alt="...Loading"
                />
              </div>
            }
          >
            <HomeLazyPage />
          </Suspense>
        }
      />
      <Route path={ROUTES.CREATE} element={<Create />} />
      <Route path={ROUTES.PRODUCT} element={<Product />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </div>
)

export default App
