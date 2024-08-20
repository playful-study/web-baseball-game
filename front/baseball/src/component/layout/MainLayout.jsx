import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyLayout from './LobbyLayout'
import LinkNavbar from '../navbar/LinkNavbar'

const MainLayout = () => {

  return (
    <div>
      <Routes>
        <Route path='/lobby' element={<LobbyLayout/>}/>
      </Routes>
    </div>
  )
}

export default MainLayout

