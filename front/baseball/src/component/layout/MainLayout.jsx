import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyLayout from './LobbyLayout'
import MainContext from '../main/MainContext'

const MainLayout = () => {

  return (
    <div>
      <MainContext/>
    </div>
  )
}

export default MainLayout

