import { filterProps } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";

function FloatingButton(props) {
  return (
    <StyledContainer
      as={motion.div}
      initial={{
        x: -3,
        y: -3,
        boxShadow: "3px 3px 0px 0px #000000",
        borderRadius: "4px",
      }}
      whileTap={{
        x: 0,
        y: 0,
        boxShadow: "0px 0px 0px 0px #000000",
        borderRadius: "4px",
      }}
    >
      <button onClick={props.onClickHandler}>
        <img src={props.img} alt="Hello" />
      </button>
    </StyledContainer>
  );
}

export default FloatingButton;

const StyledContainer = styled.div`
  height: 40px;
  width: 40px;

  & button {
    height: 100%;
    width: 100%;
    border: 3px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    /* overflow: hidden; */
    padding: 5px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  & img {
    height: 100%;
    width: 100%;

    z-index: 10;
  }
`;
