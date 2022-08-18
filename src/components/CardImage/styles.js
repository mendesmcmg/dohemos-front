import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  background-color: #fff;
  border: 1px #C9C9C9 solid;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  /* height: 200px; */
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 36px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #000;
  margin: 8px 18px;
`;

export const Subtitle = styled.h4`
  font-size: 20px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  color: #C9C9C9;
  margin: 8px 18px;
`;
