import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SidebarNode from "../pages/workspace/SidebarNode";
import { motion } from "framer-motion";
function Sidebar() {
  //  Fetch lane array ====================================================
  const [laneArray, setLaneArray] = useState([]);
  const fetchLaneHandler = useCallback(async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/lanes/children/6285067d0edff6f1dec94047`
    );
    setLaneArray(response.data.children);
    console.log("🌑", response.data);
  }, []);

  useEffect(() => {
    fetchLaneHandler();
  }, [fetchLaneHandler]);

  // JSX ==================================================================
  return (
    <StyledNav>
      <nav className="lane-nav">
        <ul>
          {laneArray.map((el, idx) => (
            <SidebarNode engramEl={el} idx={idx} key={`li_${Math.random()}`}></SidebarNode>
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
  padding-top: 60px;

  & .side-menu {
    width: 5px;
    height: 100%;
  }

  & .lane-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* & li {
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
    } */
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
