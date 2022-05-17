import styled from "styled-components";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Login from "./Login";
import Signup from "./Signup";

const NavLoggedIn = () => (
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
      <FormButton theme="red">Signout</FormButton>
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
  //  Logged in status ====================================================
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn((s) => !s);
  //  Login modal =========================================================
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const toggleLoginModal = () => {
    if (signupModalOpen) toggleSignupModal();
    setLoginModalOpen((s) => !s);
  };
  //  Signup modal =========================================================
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const toggleSignupModal = () => {
    if (loginModalOpen) toggleLoginModal();
    setSignupModalOpen((s) => !s);
  };

  //  JSX =================================================================
  return (
    <>
      {loginModalOpen && <Login />}
      {signupModalOpen && <Signup />}
      <StyledNav>
        <Link to="/">
          <h2>emlane</h2>
        </Link>
        <div className="ui-ul">
          {isLoggedIn ? (
            <NavLoggedIn />
          ) : (
            <NavLoggedOut
              loginHandler={toggleLoginModal}
              signupHandler={toggleSignupModal}
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
