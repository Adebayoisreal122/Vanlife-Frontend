import React from 'react'
import Hostnavs from './Hostnavs'
import { Outlet } from 'react-router-dom'


const Host = () => {
  return (
    <>
    <Hostnavs/>
    <Outlet/>
    </>
  )
}

export default Host