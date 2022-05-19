import styled from "styled-components";
import Canvas from "../../components/Canvas";

function NoPageHere() {
  return (
    <StyledContainer>
      <Canvas>
        <h1>404</h1>
        <p>👷Nothing to do here</p>
      </Canvas>
    </StyledContainer>
  );
}

export default NoPageHere;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;

  & h1 {
    z-index: 4;
    font-size: 128px;
    background-color: rgba(0, 0, 0, 0);
  }
  & p {
    font-size: 32px;
    background-color: rgba(0, 0, 0, 0);
  }
`;
