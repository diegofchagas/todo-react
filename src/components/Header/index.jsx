import React from 'react'
import logo from '../../assets/logo.svg'
import Form from '../Formulario'
import { Container } from './style'
const Header = () => {
  return (
    <Container>
        <img src={logo} alt="foquete" />
        <Form/>
    </Container>
  )
}

export default Header