import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'
const MainRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainRoot
