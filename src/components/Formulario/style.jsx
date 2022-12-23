import styled from "styled-components";

export const Formulario = styled.form`
  position: absolute;
  height: 3.375rem;
  bottom: calc(-3.375rem / 2);
  width: 100%;
  max-width: 46rem;
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;

  .input {
    background: #262626;
    border: 1px solid #0d0d0d;
    border-radius: 0.5rem;
    padding: 0 1rem;
    height: 100%;
    flex: 1;
    font-size: 1rem;
  }

  .input::placeholder {
    color: #808080;
    font-weight: 500;
    font-size: 14px;
  }

  button {
    background: #1e6f9f;
    height: 100%;
    padding: 0 1rem;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;
    color: #f2f2f2;
  }
`;
