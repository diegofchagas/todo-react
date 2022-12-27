import React from 'react'
import logo from '../../assets/logo.svg'
import Form from '../Formulario'
import { Container } from './style'


const Header = ({onAdicionarTarefas}) => {
  return (
    <Container>
        <img src={logo} alt="foquete" />
        <Form onAdicionarTarefas={onAdicionarTarefas}/>
    </Container>
  )
}

export default Header