import styled from "styled-components";
import Canvas from "../../components/Canvas";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Workspace() {
  return (
    <div>
      <Navbar />
      <StyledDiv>
        <Sidebar />
        <Canvas />
      </StyledDiv>
    </div>
  );
}

export default Workspace;

const StyledDiv = styled.div`
  /* border: 2px solid green; */
  background-color: #e6e6e6;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;

  box-sizing: border-box;
`;
