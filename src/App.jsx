import React, { useState } from 'react'
import { Route, Routes, Navigate, NavLink } from 'react-router-dom'

import logo from '../src/assets/cea_logo.png'
import { Register } from './components/Register'
import { Login } from './components/Login'
import './app.css'

export const App = () => {
  const [log, setLog] = ''

  return (
    <div className='total-page-container'>

      {log !== 'loged' ? 
      
        <div className='login-container'>
            <div className='routes-container'>
              <div className='header-container'>
                <img className='logo' src={logo} alt="logo" />
                <h2 className='title-header'>CENTRO DE ENSEÑANZA AUTOMOVILISTICA LOS PROFESIONALES</h2>
                <h3>EVALUACIÓN TEORICO PRÁCTICO</h3>
              </div>
              <NavLink to='login' className='btn-login'>Login</NavLink>
              <NavLink to='register' className='btn-login'>Registro</NavLink>
            </div>

            <Routes>

              <Route path='/' element={<Login></Login>}></Route>
              <Route path='/*' element={<Login></Login>}></Route>

              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>

            </Routes>

        </div>
      
      
      :
      
      
      <></>
      
      }

    </div>
  )
}