import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import Signup from '../pages/Signup'
import Login from "../pages/Login"
import Layout from '../components/layout/Layout'

const Allroutes = () => {
    return (
      <>
          <Routes>
              <Route path='/' element={<Layout/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Signup/>}></Route>
          </Routes>
      </>
    )
  }
  
  export default Allroutes