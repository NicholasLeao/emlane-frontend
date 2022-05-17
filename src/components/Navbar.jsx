import styled from "styled-components";

function Navbar() {
  return (
    <StyledNav>
      <h2>emlane</h2>
      <div className="ui-ul">
        <ul>
          <li>
            <button>+</button>
          </li>
          <li>
            <button>+</button>
          </li>
          <li>
            <button>+</button>
          </li>
        </ul>
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

      border: 4px solid black;
      box-sizing: border-box;
      font-size: large;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
