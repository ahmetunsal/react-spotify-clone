import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'
import Library from '../library/Library'
import Player from '../player/Player'
import Footer from '../footer/Footer'
import MobileNav from '../nav/MobileNav'

const Template = () => {
  return (
    <div className='w-full h-screen bg-black overflow-hidden'>
        <Nav />
        <div className="w-full h-full md:h-[93.3%] flex flex-col">
          <div className="flex h-full pe-2">
            <Library />
            <div style={{
              background: "linear-gradient(#4d4d4d, rgb(0, 0, 0) 25%)"
            }} className="w-full min-h-full rounded-md overflow-y-auto flex flex-col from-white to-zinc-800 text-white gabarito">
              <Outlet />
            </div>
          </div>
          <Player />
          <MobileNav />
        </div>
    </div>
  )
}

export default Template