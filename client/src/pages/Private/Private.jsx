import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { RoutesWhitNotFound } from '../../Utilities'
import { PrivateRoutes} from '../../Guards/index'
import { lazy } from 'react'

const Home = lazy(() => import('../Home/Home'))
const DashBoard = lazy(() => import('../Dashboard/Dashboard'))

const Private = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
                <Route path={PrivateRoutes.HOME} element={<Home/>}/>
                <Route path={PrivateRoutes.DASHBOARD} element={<DashBoard/>}/>
            </Routes>
        </>
    )
}

export default Private