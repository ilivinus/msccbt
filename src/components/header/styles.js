import styled from "styled-components";

export const HeaderWrapper = styled.section`
  height: 10vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: row;
`;
export const HeaderLogo = styled.div`
  background: #3d3dead8;
  width: 80%;
  padding-left: 1em;
  display: flex;
  align-items: center;
`;

export const HeaderUserInfo = styled.div`
  background: #2703038d;
  width: 20%;
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  select {
    outline: none;
    border: none;
    border-radius: 4px;
    height: 2em;
  }
`;

export const Title = styled.h2``;
