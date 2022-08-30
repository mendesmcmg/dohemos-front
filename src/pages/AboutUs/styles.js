import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  align-items: center;
`;

export const BackLink = styled.a`
  width: 50%;
  max-width: 800px;
  margin-top: 100px;
  margin-bottom: 12px;
  font-size: 20px;
  width: 100%;
  text-align: left;
`;

export const Content = styled.div`
  width: 50%;
  max-width: 800px;
  background-color: white;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 220px;
  object-fit: cover;
`;
