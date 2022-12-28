import styled from "styled-components";

export const Container = styled.header`
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;
  position: relative;

  h1 {
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;
