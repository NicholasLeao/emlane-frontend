import styled from "styled-components";
import { motion } from "framer-motion";

function FormButton(props) {
  return (
    <StyledContainer>
      <motion.div
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          name={props.nameProperty}
          onClick={props.onClick}
          className={`${props.theme}`}
        >
          {props.children}
        </button>
      </motion.div>
    </StyledContainer>
  );
}

export default FormButton;

const StyledContainer = styled.div`
  & button {
    padding: 8px 15px;
    border-radius: 6px;
    border: 3px solid black;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  & .red {
    background-color: #fb5607;
    border-color: #fb5607;
    color: white;
  }
  & .purple {
    background-color: #8338ec;
    border-color: #8338ec;
    color: white;
  }
  & .green {
    color: white;
    margin-top: 15px;
    background-color: #8fc0a9;
    border-color: #8fc0a9;
  }
  & .green-no-margin {
    color: white;
    /* margin-top: 15px; */
    background-color: #8fc0a9;
    border-color: #8fc0a9;
  }
  & .purple-outline {
    background-color: white;
    border-color: #8338ec;
    color: #8338ec;
  }
`;
