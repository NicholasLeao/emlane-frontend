import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LaneContext } from "../../contexts/laneContext";
import { useNavigate } from "react-router-dom";

function Lane(props) {
  const { laneElement } = props;
  const { currentLane, setCurrentLane } = useContext(LaneContext);
  const navigate = useNavigate();

  const clickHandler = () => {
    setCurrentLane(laneElement._id);
    navigate("/workspace/no-engram");
  };
  // console.log("🥰", laneElement);

  return (
    <StyledContainer>
      <motion.div
        onClick={clickHandler}
        initial={{
          x: -5,
          y: -5,
          boxShadow: "5px 5px 0px 0px #000000",
          borderRadius: "12px",
        }}
        whileTap={{
          x: 0,
          y: 0,
          boxShadow: "0px 0px 0px 0px #000000",
          borderRadius: "12px",
        }}
        whileHover={{
          x: -7,
          y: -7,
          boxShadow: "7px 7px 0px 0px #000000",
          borderRadius: "12px",
          transition: { duration: 0.3 },
        }}
        className="lane"
      >
        <h2>{laneElement.title}</h2>
        <p>💠0{laneElement.length} Engrams </p>
        <p className="date">{laneElement.createdAt}</p>
      </motion.div>
    </StyledContainer>
  );
}

export default Lane;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .lane {
    min-width: 150px;
    height: 220px;
    border: 4px solid black;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
  }

  & h2 {
    text-align: center;
  }

  & .date {
    color: #a8a8a8;
  }
`;
