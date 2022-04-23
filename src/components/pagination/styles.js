import styled, { css } from "styled-components";

export const Button = styled.button`
  appearance: none;
  border: none;
  background: white;
  padding: 1em;
  text-transform: uppercase;
  border-radius: 8px;
  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :disabled {
    background: gray;
  }
  cursor: pointer;
  :active {
    background: green;
    transform: scale(1.5);
  }
`;
export const PrevButton = styled(Button)`
  margin-right: 2em;
  span {
    padding-left: 10px;
    font-size: 1.5em;
  }
`;
export const NextButton = styled(Button)`
  margin-left: 2em;
  span {
    padding-right: 10px;
    font-size: 1.5em;
  }
`;
export const Timer = styled.div`
  background: white;
  padding: 1em;
  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 1.5em;
  font-weight: bolder;
  ${({ warning }) =>
    warning &&
    css`
      background: rgb(239, 38, 44);
      color: white;
    `}
`;
export const PaginationWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
