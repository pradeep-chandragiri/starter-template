import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import PageNotFound from '../pages/404/PageNotFound.jsx'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='*' element={ <PageNotFound /> } />
            </Routes>
        </>
    )
}

export default AppRoutes