import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authprovider";
import { HeaderLogo, HeaderWrapper, HeaderUserInfo, Title } from "./styles";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { nextClickListener } from "../../lib/pageReader";

const Header = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          <Title>Nnamdi Azikiwe University CBT</Title>
        </HeaderLogo>
        <AuthStatus />
        <HeaderUserInfo>
          <div>
            <div htmlFor="tool">Select NLP tool</div>
            <select
              id="tool"
              onChange={(e) => {
                if (e.target.value !== selected) {
                  setSelected(e.target.value);
                  nextClickListener();
                }
              }}
            >
              <option selected={selected === ""} value={""}>
                Select
              </option>
              <option selected={selected === "gtts"} value={"gtts"}>
                Google Text to Speech
              </option>
              <option selected={selected === "ibm"} value={"ibm"}>
                IBM Text to Speech
              </option>
              <option selected={selected === "cnn"} value={"cnn"}>
                CNN Text to Speech
              </option>
            </select>
          </div>
          <div>
            <Icon
              size="2x"
              onClick={() => {
                nextClickListener();
              }}
              icon={faRadio}
            />
          </div>
        </HeaderUserInfo>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
const Icon = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  padding: 0.2em;
  &:hover {
    color: black;
  }
`;
const AuthWrapper = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20em;
  button {
    appearance: none;
    border: none;
    font-size: 0.8em;
    background: #058d8a;
    width: 10em;
    cursor: pointer;
    color: #fff;
    &:hover {
      background: #54bbb9;
    }
    height: 2em;
  }
`;
const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return (
      <AuthWrapper>
        {" "}
        <p>You are not logged in.</p>
      </AuthWrapper>
    );
  }

  return (
    <AuthWrapper>
      <span>Welcome {auth.user}!</span>
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </AuthWrapper>
  );
};
