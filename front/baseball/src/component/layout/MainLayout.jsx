import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyLayout from './LobbyLayout'
import MainContext from '../main/MainContext'

const MainLayout = () => {

  return (
    <div>
      <Routes>
        <Route path='*' element={<MainContext/>}/>
        <Route path='/lobby' element={<LobbyLayout/>}/>
      </Routes>
    </div>
  )
}

export default MainLayout

