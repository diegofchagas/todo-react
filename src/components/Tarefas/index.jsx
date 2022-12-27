import React from "react";
import { TbClipboardText } from "react-icons/tb";
import { Container } from "./style";
import Tarefa from "../Tarefa"


const Tarefas = ({tarefas, onDeletar, onRealizadas}) => {
    const qtdTarefas = tarefas.length
    const tarefasConcluidas = tarefas.filter((tarefa)=> tarefa.completa).length

  return (
    <Container>
      <header className="header">
        <div className="tarefas-controle">
          <p>Tarefas Criadas</p>
          <span>{qtdTarefas}</span>
        </div>

        <div className="tarefas-controle">
          <p className="tarefa-concluida">Concluídas</p>
          <span>
            {tarefasConcluidas} de {qtdTarefas}
          </span>
        </div>
      </header>

      <div className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            onDeletar={onDeletar}
            onRealizadas={onRealizadas}
          />
        ))}

        {tarefas.length <= 0 && (
          <section className="quadro-aviso">
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie Tarefas e organize seus itens a fazer</p>
            </div>
          </section>
        )}
      </div>
    </Container>
  );
};

export default Tarefas;
