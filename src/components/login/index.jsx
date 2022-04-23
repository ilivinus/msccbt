import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authprovider";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:60vh;
`;
const FormControl = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 1.5em;
    label{
        margin-bottom: 0.5em;
    }
    input{
        width: 20em;
        height: 40px;
        border:none;
        border: 1px solid #000;
        border-radius: 4px;
    }
`
const Button = styled.button`
    appearance: none;
    border:none;
    background: #3d3dead8;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 20em;
    &:hover{
        background: white;
        color: #3d3dead8;
    }
`
function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <LoginWrapper>
      <p>Log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="username">Username:</label>
          <input name="username" id="username" type="text" />
        </FormControl>
        <FormControl>
          <label htmlFor="password">Password:</label>
          <input name="password" id="username" type="password" />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </LoginWrapper>
  );
}
export default LoginPage;
