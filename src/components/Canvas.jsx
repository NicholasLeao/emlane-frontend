import styled from "styled-components";
import CanvasPattern from "./CanvasPattern";

function Canvas(props) {
  return (
    <StyledDiv>
      {props.children}
      <CanvasPattern />
    </StyledDiv>
  );
}

export default Canvas;

const StyledDiv = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
`;
