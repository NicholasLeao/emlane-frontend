import styled from "styled-components";
import FormButton from "./FormButton";

const NavLoggedIn = () => (
  <ul>
    <li>
      <FormButton>Lanes</FormButton>
    </li>
    <li>
      <FormButton theme="red">Signout</FormButton>
    </li>
  </ul>
);
const NavLoggedOut = () => (
  <ul>
    <li>
      <FormButton>English ▼</FormButton>
    </li>
    <li>
      <FormButton>Log in</FormButton>
    </li>
    <li>
      <FormButton theme="purple">Signup</FormButton>
    </li>
  </ul>
);

function Navbar() {
  return (
    <StyledNav>
      <h2>emlane</h2>
      <div className="ui-ul">
        <NavLoggedIn />
      </div>
    </StyledNav>
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
