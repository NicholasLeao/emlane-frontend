import styled from "styled-components";

function Sidebar() {
  return <StyledNav></StyledNav>;
}

export default Sidebar;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: auto;
  z-index: 1;

  background-color: white;
  border: 4px solid black;
  box-sizing: border-box;

  padding: 10px 5px;
  /* position: fixed;
  top: 0; */
`;
