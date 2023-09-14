import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

type Props = {}

const Layout = (props: Props) => {
  return(
    <div className="flex flex-row w-screen h-screen overflow-hidden bg-neutral-100">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Navbar />
      <div className="flex-1 min-h-0 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Layout