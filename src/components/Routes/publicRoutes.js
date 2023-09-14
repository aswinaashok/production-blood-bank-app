import React from 'react'
import { Navigate } from 'react-router-dom'

const publicRoutes = ({children}) => {
  if(localStorage.getItem('token')){
    return <Navigate to="/"/>
  }
}

export default publicRoutes