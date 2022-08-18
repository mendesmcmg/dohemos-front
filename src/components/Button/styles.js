import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.backgroundColor};
  padding: 0.5rem 1rem;
  min-width: 140px;
  height: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #FFF;

  &:hover {
    background: black;
  }
`;
