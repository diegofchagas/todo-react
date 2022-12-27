import React from "react";
import check from "../../assets/check-circle.svg";
import bola from "../../assets/bola.svg";
import { TbTrash } from "react-icons/tb";
import { ListaDeTarefas } from "./style";

const Tarefa = ({ tarefa, onDeletar, onRealizadas }) => {
  return (
    <ListaDeTarefas>
      <button className="btn" onClick={() => onRealizadas(tarefa.id)}>
        <img
          className="apurar"
          src={tarefa.completa ? check : bola}
          alt="circulo ou check"
        />
      </button>

      <p className={tarefa.completa ? "tarefa-feita" : ""}>{tarefa.titulo}</p>
      <button className="btn-deletar" onClick={() => onDeletar(tarefa)}>
        <TbTrash size={20} />
      </button>
    </ListaDeTarefas>
  );
};

export default Tarefa;
