import styled from "styled-components";
import Canvas from "../../components/Canvas";
import Sidebar from "../../components/Sidebar";

function Workspace() {
  return (
    <StyledDiv>
      <div className="work-area">
        <Sidebar />
        <Canvas />
      </div>
    </StyledDiv>
  );
}

export default Workspace;

const StyledDiv = styled.div`
  height: auto;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;

  & .work-area {
    background-color: #e6e6e6;
    width: 100vw;
    height: calc(100vh);
    margin-top: 100px;
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
