import styled from "styled-components";
import CanvasPattern from "./CanvasPattern";

function Canvas() {
  return (
    <StyledDiv>
      <CanvasPattern />
    </StyledDiv>
  );
}

export default Canvas;


const StyledDiv = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;


`;
