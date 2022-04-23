import styled, { css } from "styled-components";

export const AsideWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  margin: 2px;
`;
export const PageButton = styled.button`
  appearance: none;
  border: none;
  padding: 5px;
  background: grey;
  height: 2.8em;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: transparent;
    border: 1px solid blue;
    color: #000;
  }
  ${({ answered }) =>
    answered &&
    css`
      background: blueviolet;
    `}
  ${({ active }) =>
    active &&
    css`
      background: green;
    `}
`;
