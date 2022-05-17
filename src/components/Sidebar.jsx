import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

function Sidebar() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => setIsToggled((s) => !s);

  return (
    <StyledNav>
      <motion.div
        className="side-menu"
        onHoverStart={toggleHandler}
        onHoverEnd={toggleHandler}
        whileHover={{
          width: 50,
          transition: { duration: 0.5 },
        }}
      ></motion.div>
    </StyledNav>
  );
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
  padding: 0;

  background-color: white;
  border: 4px solid black;
  box-sizing: border-box;

  padding: 10px 5px;

  & .side-menu {
    /* border: 2px solid red; */
    width: 5px;
    height: 100%;
    margin: 0;
  }
`;
