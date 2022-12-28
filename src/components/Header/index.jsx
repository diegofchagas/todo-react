import React from "react";
import Form from "../Formulario";
import { Container } from "./style";

const Header = ({ onAdicionarTarefas }) => {
  return (
    <Container>
      <h1>Todo List</h1>
      <Form onAdicionarTarefas={onAdicionarTarefas} />
    </Container>
  );
};

export default Header;
