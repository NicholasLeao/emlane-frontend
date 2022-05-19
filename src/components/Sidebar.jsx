import styled from "styled-components";
import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import SidebarNode from "../pages/workspace/SidebarNode";
import { motion } from "framer-motion";
import { LaneContext } from "../contexts/laneContext";
import { api } from "../api/api";
function Sidebar() {
  //  Define current lane
  const { currentLane } = useContext(LaneContext);

  //  Fetch lane array ====================================================
  const [laneArray, setLaneArray] = useState([]);
  const fetchLaneHandler = useCallback(async () => {
    const response = await api.get(`/lanes/children/${currentLane.id}`);
    setLaneArray(response.data.children);
    // console.log("🌑", response.data);
  }, [currentLane.id]);

  useEffect(() => {
    fetchLaneHandler();
  }, [fetchLaneHandler]);

  // Add new engram =======================================================

  // Add engram function
  const handleAddEngram = useCallback(async () => {
    if (!currentLane.id) return;
    try {
      console.log("hey");
      // Create engram
      const response = await api.post("/engrams", {
        title: "",
        owner: currentLane.id,
      });
      if (!response.status === 201) throw response;
      // Add engram to lane
      await api.post(`/lanes/children/${currentLane.id}`, {
        children: response.data.data.engram.id,
      });
      //
      fetchLaneHandler();
    } catch (err) {}
  }, [currentLane.id, fetchLaneHandler]);

  // JSX ==================================================================
  return (
    <StyledNav>
      <nav className="lane-nav">
        <ul>
          {laneArray.map((el, idx) => (
            <SidebarNode
              engramEl={el}
              idx={idx}
              key={`li_${Math.random()}`}
            ></SidebarNode>
          ))}
          <motion.button
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            className="add-instance"
            onClick={handleAddEngram}
          >
            <p>+</p>
          </motion.button>
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

  & .add-instance {
    margin-top: 15px;
    width: 100%;
    height: 100%;
    background-color: white;
    font-size: 30px;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .side-menu {
    width: 5px;
    height: 100%;
  }

  & .lane-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
