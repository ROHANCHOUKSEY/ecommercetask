import React from 'react'
import Header from './Component/Layout/Header'
import { Outlet } from 'react-router-dom'
import PosterDetails from './Component/PosterComponenet/PosterDetails'

const App = () => {
  return (
    <>
      <Header/>
      <PosterDetails/>
      <Outlet/>
    </>
  )
} 

export default App