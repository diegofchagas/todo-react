import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Input from '../Input'
import { Formulario } from './style'

const Form = () => {
  return (
    <Formulario>
        <Input className="input" placeholder='Adicione uma nova tarefa'/>
        <button>Criar < AiOutlinePlusCircle/> </button>
    </Formulario>
  )
}

export default Form