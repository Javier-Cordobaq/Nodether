import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from './index'

export const AuthGuard = () => {
  const user = true; 
  return user === true ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>
}

export default AuthGuard