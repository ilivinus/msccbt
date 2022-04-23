import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import App from "./App";
import Header from "./components/header";
import Home from "./components/home";
import LoginPage from "./components/login";
import { AuthProvider, RequireAuth } from "./hooks/authprovider";
// import your route components too
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Router = () => {
  return (
    <AuthProvider>
      <AppWrapper>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <App />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AppWrapper>
    </AuthProvider>
  );
};

export default Router;
