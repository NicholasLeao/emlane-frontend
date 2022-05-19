import styled from "styled-components";
import Instance from "./Instance";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Instances(props) {
  const { id: currentEngramId } = useParams();

  //  Instance fetch =========================================================
  const [instanceArray, setInstanceArray] = useState([]);

  const fetchInstances = useCallback(async () => {
    if (currentEngramId === "no-engram") return;
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/engrams/children/${props.engramId}`
      );
      if (response) {
        setInstanceArray(response.data.children);
      }
    } catch (err) {
      console.log(err);
    }
  }, [props.engramId, currentEngramId]);

  useEffect(() => {
    fetchInstances();
  }, [fetchInstances, props.updateToken]);

  //  JSX ===================================================================
  return (
    <StyledDiv>
      {currentEngramId !== "no-engram" &&
        instanceArray.map((el) => (
          <Instance instanceEl={el} key={`${Math.random()}`} />
        ))}
    </StyledDiv>
  );
}

export default Instances;

const StyledDiv = styled.div`
  /* border: 4px solid red; */
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  width: 650px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px 15px 15px 15px;

  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
