import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Sidebar() {
  //  Animation toggle state
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => setIsToggled((s) => !s);

  //  Fetch lane array
  const [laneState, setLaneState] = useState([]);
  const fetchLaneHandler = useCallback(async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/engrams/children/62836a5e4f000875e0494ffd`
    );
    setLaneState(response.data.engram.children);
    // console.log(response.data.engram.children);
  }, []);

  useEffect(() => {
    fetchLaneHandler();
  }, [fetchLaneHandler]);

  return (
    <StyledNav>
      <motion.div
        className="side-menu"
        onHoverStart={toggleHandler}
        onHoverEnd={toggleHandler}
        whileHover={{
          width: 50,
          transition: { duration: 0.5 },
        }}
      ></motion.div>

      <nav className="lane-nav">
        <ul>
          {laneState.map((el, idx) => (
            <li>🍌</li>
          ))}
        </ul>
      </nav>
    </StyledNav>
  );
}

export default Sidebar;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: auto;
  z-index: 1;
  padding: 0;

  background-color: white;
  border: 4px solid black;
  box-sizing: border-box;

  padding: 10px 5px;

  & .side-menu {
    /* border: 2px solid red; */
    width: 5px;
    height: 100%;
    margin: 0;
  }

  & .lane-nav {
    border: 2px solid red;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    & li {
      border: 2px solid gray;
      list-style: none;
    }
  }
`;
