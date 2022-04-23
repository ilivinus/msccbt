import styled from "styled-components";

export const QuestionOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  height: 100%;
  font-size: 1.5em;
`;
export const Question = styled.div`
  margin-top: 2em;
  background: white;
  padding: 2em;
  border-radius: 8px;
  height: fit-content;
  width: 80%;
  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.75);
`;
export const Options = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  width: 80%;
  div {
    padding: 8px;
  }
  label {
    margin-left: 1em;
    margin-right: 1em;
  }
`;
