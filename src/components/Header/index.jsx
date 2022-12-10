import React from 'react'
import logo from '../../assets/logo.svg'
import Form from '../Formulario'
const Header = () => {
  return (
    <div>
        <img src={logo} alt="" />
        <Form/>
    </div>
  )
}

export default Header