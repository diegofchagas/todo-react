import styled from "styled-components";

export const ListaDeTarefas = styled.div`
  width: 100%;
  background: #262626;
  border: 1px solid #333333;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  .btn {
    min-width: 1.125rem;
    height: 1.125rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .btn-deletar{
    background: none;
    border:none;
    color: #808080;
    cursor: pointer;
  }

  .apurar {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 0.938rem;
    line-height: 1.18rem;
    color: #f2f2f2;
    margin-right: auto;
  }

  p.tarefa-feita {
    color: #808080;
    text-decoration: line-through;
  }
`;
