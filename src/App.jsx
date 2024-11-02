import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/template/Template'
import Home from './pages/home/Home'
import Artist from './pages/artist/Artist'
import Album from './pages/album/Album'
import Playlist from './pages/playlist/Playlist'
import Search from './pages/search/Search'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/artist/:artistId",
          element: <Artist />
        },
        {
          path: "/album/:albumId",
          element: <Album />
        },
        {
          path: "/playlist/:playlistId",
          element: <Playlist />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/search/:playlistId",
          element: <Playlist />
        },
      ]
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
