import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex h-[calc(100vh - 64px)] overflow-y-scroll '>
                <Sidebar />
                <div className='w-[100%]'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AppLayout