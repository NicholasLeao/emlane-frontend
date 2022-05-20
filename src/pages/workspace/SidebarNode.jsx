import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function SidebarNode(props) {
  return (
    <Link to={`/workspace/${props.engramEl.id}`}>
      <li>
        <StyledBtn
          as={motion.div}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <p className="number">{props.idx}</p>
        </StyledBtn>
      </li>
    </Link>
  );
}

export default SidebarNode;

const StyledBtn = styled.button`
  margin-top: 25px;
  width: 100%;
  height: 100%;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 4px solid black;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "PP Neue Machina";

  & .number {
    background-color: rgba(0, 0, 0, 0);
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }
`;
