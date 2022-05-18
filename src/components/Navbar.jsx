import styled from "styled-components";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ModalContext } from "../contexts/modalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavLoggedIn = (props) => (
  <ul>
    <li>
      <Link to="/workspace">
        <FormButton>Workspace</FormButton>
      </Link>
    </li>
    <li>
      <Link to="/lanes">
        <FormButton>Lanes</FormButton>
      </Link>
    </li>
    <li>
      <FormButton onClick={props.handleLogout} theme="red">
        Signout
      </FormButton>
    </li>
  </ul>
);
const NavLoggedOut = (props) => (
  <ul>
    <li>
      <FormButton>English ▼</FormButton>
    </li>
    <li>
      <FormButton onClick={props.loginHandler}>Log in</FormButton>
    </li>
    <li>
      <FormButton onClick={props.signupHandler} theme="purple">
        Signup
      </FormButton>
    </li>
  </ul>
);

function Navbar() {
  const { loggedInUser } = useContext(AuthContext);
  const { modalHandler } = useContext(ModalContext);

  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("emlane-user");
    navigate("/");
  }

  //  JSX =================================================================
  return (
    <>
      <StyledNav>
        <Link to="/">
          <h2>emlane</h2>
        </Link>
        <div className="ui-ul">
          {loggedInUser ? (
            <NavLoggedIn handleLogout={handleLogout} />
          ) : (
            <NavLoggedOut
              loginHandler={() => modalHandler("login")}
              signupHandler={() => modalHandler("signup")}
            />
          )}
        </div>
      </StyledNav>
    </>
  );
}

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  z-index: 10;
  background-color: white;
  border: 4px solid black;
  box-sizing: border-box;

  padding: 10px 20px;
  position: fixed;
  top: 0;

  & .ui-ul {
    & ul {
      display: flex;
      flex-direction: row;
    }
    & li {
      list-style: none;
      text-decoration: none;
    }
    & button {
      height: 30px;
      padding: 15px;
      margin-left: 15px;

      box-sizing: border-box;
      font-size: large;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
