import './App.css'
import { Route, Navigate, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './Guards/index'
import { AuthGuard } from './Guards'
import { RoutesWhitNotFound } from './Utilities'
import { Suspense } from 'react'
import { lazy } from 'react'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Routes>
          <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard/>}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
