import styled from "styled-components";
import { ModalContext } from "../contexts/modalContext";
import { useContext } from "react";

function Backdrop() {
  const { modalHandler } = useContext(ModalContext);
  return <StyledDiv onClick={() => modalHandler("none")}></StyledDiv>;
}

export default Backdrop;

const StyledDiv = styled.div`
  opacity: 0;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
`;
