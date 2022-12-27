import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Tarefas from "./components/Tarefas";

const Home = () => {
  const [tarefas, setTarefas] = useState([]);

  function addTarefas(input) {
    const novaTarefa = { id: Math.random(), titulo: input, completa: false };
    guardaTarefas([...tarefas, novaTarefa]);
  }

  const deletarTarefa = (tarefa) => {
    let novasTarefas = tarefas.filter((it) => it !== tarefa);
    guardaTarefas(novasTarefas);
  };

  const finalizarTarefa = (id) => {
    const tarefasRealizadas = tarefas.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          completa: !task.completa,
          titulo: task.titulo,
        };
      } else {
        return task;
      }
    });

    guardaTarefas(tarefasRealizadas);
  };

  function salvarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      guardaTarefas(JSON.parse(tarefasSalvas));
    }
  }

  useEffect(() => {
    salvarTarefas();
  }, []);

  function guardaTarefas(tarefas) {
    setTarefas(tarefas);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  return (
    <div>
      <Header onAdicionarTarefas={addTarefas} />
      <Tarefas
        tarefas={tarefas}
        onDeletar={deletarTarefa}
        onRealizadas={finalizarTarefa}
      />
    </div>
  );
};

export default Home;
