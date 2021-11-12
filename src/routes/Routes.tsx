import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const SignIn = lazy(() => import('pages/SignIn/SignIn'))
const SignUp = lazy(() => import('pages/SignUp/SignUp'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))

const AppRoutes = () => {
  const isLogged = false

  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route
            path='/'
            element={
              isLogged ? <HomePage /> : <Navigate replace to='/signin' />
            }
          />
          <Route
            path='/signin'
            element={isLogged ? <Navigate replace to='/' /> : <SignIn />}
          />
          <Route
            path='/signup'
            element={isLogged ? <Navigate replace to='/' /> : <SignUp />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
