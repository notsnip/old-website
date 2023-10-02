import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

function App(){
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
