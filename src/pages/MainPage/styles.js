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
  padding: 0 85px;
`;

export const SearchBar = styled.input`
  height: 60px;
  padding: 14px 18px;
  margin-top: 85px;
  width: 100%;
`;

export const CheckboxDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  margin-top: 12px;
  margin-bottom: 60px;
`;

export const FilterText = styled.span``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  align-items: center;
  justify-items: center;
`;
