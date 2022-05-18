import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Sidebar() {
  //  Animation toggle state ==============================================
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => setIsToggled((s) => !s);

  //  Fetch lane array ====================================================
  const [laneState, setLaneState] = useState([]);
  const fetchLaneHandler = useCallback(async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/engrams/children/62836a5e4f000875e0494ffd`
    );
    setLaneState(response.data.engram.children);
  }, []);

  useEffect(() => {
    fetchLaneHandler();
  }, [fetchLaneHandler]);

  // JSX ==================================================================
  return (
    <StyledNav>
      <nav className="lane-nav">
        <ul>
          {laneState.map((el, idx) => (
            <li key={`li_${Math.random()}`}></li>
          ))}
        </ul>
      </nav>
    </StyledNav>
  );
}

export default Sidebar;

// Styled Component =======================================================
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: auto;
  overflow-x: hidden;
  margin: 0;
  box-sizing: border-box;
  background-color: white;
  border: 4px solid black;
  padding: 0 10px;
  z-index: 2;

  & .side-menu {
    width: 5px;
    height: 100%;
  }

  & .lane-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & li {
      width: 28px;
      height: 28px;
      border-radius: 20%;
      transform: rotate(45deg);
      margin: 25px 0 0 0;

      background-color: #8f6fe9;
      border: 2px solid black;

      box-sizing: border-box;

      list-style: none;
      cursor: pointer;
    }
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
