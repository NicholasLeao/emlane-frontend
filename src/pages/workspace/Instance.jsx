import styled from "styled-components";
import TextBox from "./TextBox";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Instance(props) {
  // lifted state from TextBox ============================================
  const [instanceText, setInstanceText] = useState("");
  useEffect(() => console.log("😺", instanceText), [instanceText]);

  // JSX ==================================================================
  return (
    <StyledDiv>
      <div className="instance">
        <p>{props.instanceEl.content}</p>
        <TextBox setHandler={setInstanceText}></TextBox>
      </div>
    </StyledDiv>
  );
}

export default Instance;

const StyledDiv = styled.div`
  width: 100%;
  border-radius: 8px;
  /* height: 150px; */

  & .instance {
    width: 100%;
    /* height: 150px; */
    border: 4px solid black;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 15px;
    box-shadow: 3px 3px 0px 1px #000000;
  }
`;
