import styled from "styled-components";
import Instance from "./Instance";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Instances() {
  //  Instace fetch =========================================================
  const [instanceArray, setInstanceArray] = useState([]);

  const fetchInstances = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/engrams/children/62836a5e4f000875e0494ffd"
      );
      if (response) {
        setInstanceArray(response.data.children);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchInstances();
  }, [fetchInstances]);

  //  JSX ===================================================================
  return (
    <StyledDiv>
      {instanceArray.map((el) => (
        <Instance instanceEl={el} key={`${Math.random()}`} />
      ))}
    </StyledDiv>
  );
}

export default Instances;

const StyledDiv = styled.div`
  border: 4px solid red;
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  width: 650px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
