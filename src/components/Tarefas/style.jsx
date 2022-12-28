import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 4.5rem;
  margin-bottom: -28px;
  font-family: "Inter", sans-serif;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .tarefas-controle {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .tarefas-controle p {
    color: #ffbb00;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  .tarefas-controle .tarefa-concluida {
    color: #e4a30b;
  }

  .tarefas-controle span {
    padding: 3px 9px;
    background-color: #333333;
    color: #d9d9d9;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
  }

  .lista-tarefas {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 1.5rem;
  }

  .quadro-aviso {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    color: #808080;
    text-align: center;
  }
`;
