import React from 'react'

import './log.css'

export const Register = () => {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className='form-container'>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" required name='name' placeholder='Tu nombre...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="lastname">Apellido:</label>
                    <input type="text" required name='lastname' placeholder='Tu apellido...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" required name='email' placeholder='Tu correo...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" required name='password' placeholder='Tu contraseña...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="documentType">Tipo de documento</label>
                    <select required className='input-select' name="documentType">
                        <option value="">--Selecciona un tipo de documento--</option>
                        <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                        <option value="Cedula extranjeria">Cedula extranjeria</option>
                        <option value="PPT">PPT</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="document">Numero de documento:</label>
                    <input type="text" required name='document' placeholder='Numero documento...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="expedition">Lugar de expedición:</label>
                    <input type="text" required name='expedition' placeholder='Lugar de expedición...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="testPlace">Lugar de evaluacion:</label>
                    <input type="text" required name='testPlace' placeholder='Lugar de evaluación...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="documentType">Centro deformación</label>
                    <select required className='input-select' name="centerFormation">
                        <option value="">--Selecciona el centro de formación--</option>
                        <option value="CEA Los profesionales">CEA Los profesionales</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="companyName">Nombre empresa en alianza:</label>
                    <input type="text" required name='companyName' placeholder='Nombre empresa...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="testType">Categoria</label>
                    <select required className='input-select' name="testType">
                        <option value="">--Selecciona una categoria--</option>
                        <option value="Carro">Carro</option>
                        <option value="Moto">Moto</option>
                    </select>
                </div>

                <button className='btn-login' type='submit'>Registrarse</button>
            </form>
        </div>
    )
}