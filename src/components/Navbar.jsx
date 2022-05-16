import styled from "styled-components";

function Navbar() {
  return <StyledNav></StyledNav>;
}

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  z-index: 10;
  background-color: white;
  border: 4px solid black;
  box-sizing: border-box;

  padding: 10px 5px;
  position: fixed;
  top: 0;
`;
