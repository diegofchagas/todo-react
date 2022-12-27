import React, { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Input from '../Input'
import { Formulario } from './style'

const Form = ({onAdicionarTarefas}) => {
  const [input, setInput] = useState("")
 

  function handleSubmit(e) {
    e.preventDefault();
    onAdicionarTarefas(input);
    setInput("");
  }

  function onChangeTitulo(e) {
    setInput(e.target.value);
  }

  return (
    <Formulario onSubmit={handleSubmit}>
        <Input className="input" value={input} onChange={onChangeTitulo} placeholder='Adicione uma nova tarefa'/>
        <button>Criar < AiOutlinePlusCircle/> </button>
    </Formulario>
  )
}

export default Form