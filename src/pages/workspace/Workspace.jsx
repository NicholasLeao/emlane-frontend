import styled from "styled-components";
import Canvas from "../../components/Canvas";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Workspace() {
  return (
    <StyledDiv>
      <Navbar />
      <div className="work-area">
        <Sidebar />
        <Canvas />
      </div>
    </StyledDiv>
  );
}

export default Workspace;

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;

  & .work-area {
    background-color: #e6e6e6;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;

    box-sizing: border-box;
  }
`;
