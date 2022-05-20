import styled from "styled-components";
import FormButton from "./FormButton";

import { AuthContext } from "../contexts/authContext";
import { ModalContext } from "../contexts/modalContext";

import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

const NavLoggedIn = (props) => {
  const { t, i18n } = useTranslation();

  // =========================================================
  return (
    <ul>
      <li>
        <FormButton>English ▼</FormButton>
      </li>
      <li>
        <Link to={`/workspace/no-engram`}>
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
};
const NavLoggedOut = (props) => {
  const { t, i18n } = useTranslation();

  // =========================================================
  return (
    <ul>
      <li>
        <LanguageButton />
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
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { modalHandler } = useContext(ModalContext);

  // Logout ===============================================================
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("emlane-user");
    setLoggedInUser({
      token: "",
      user: {},
    });
    navigate("/");
  }

  // Track if user is logged in ===========================================
  const [loggedInUserBool, setLoggedInUserBool] = useState(false);
  useEffect(
    () => setLoggedInUserBool(loggedInUser.token !== ""),
    [loggedInUser]
  );

  //  JSX =================================================================
  return (
    <>
      <StyledNav>
        <Link to="/">
          <h2
            style={{
              fontFamily: "PP Neue Machina",
              fontSize: "28px",
            }}
          >
            emlane
          </h2>
        </Link>
        <div className="ui-ul">
          {loggedInUserBool ? (
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
