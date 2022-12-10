import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Input from '../Input'

const Form = () => {
  return (
    <form>
        <Input placeholder='Adicione uma nova tarefa'/>
        <button>Criar < AiOutlinePlusCircle/> </button>
    </form>
  )
}

export default Form