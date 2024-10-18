import React from 'react'

import './log.css'

export const Login = () => {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className='form-container'>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" required name='email' placeholder='Correo electrónico...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" required name='password' placeholder='Contraseña...' />
                </div>

                <button className='btn-login' type='submit'>Login</button>
            </form>
        </div>
    )
}