import styled from "styled-components";
import TextBox from "./TextBox";
import { useState, useEffect, useCallback } from "react";
import { api } from "../../api/api";
import React from "react";
import Mermaid from "./MermaidChart";
import { motion } from "framer-motion";

function MermaidInstance(props) {
  // lifted state from TextBox ============================================
  const [instanceText, setInstanceText] = useState("");
  const [textAreaVisible, setTextAreaVisible] = useState(true);
  useEffect(() => setInstanceText(props.instanceEl.content), []);

  const handleChange = (e) => {
    setInstanceText(e.target.value);
  };
  useEffect(() => console.log(instanceText), [instanceText]);

  // Save to server =======================================================
  const saveToServer = useCallback(async () => {
    try {
      if (props.instanceEl.content === instanceText) return;
      await api.patch(`/instances/${props.instanceEl._id}`, {
        content: instanceText,
      });
    } catch (err) {}
  }, [instanceText, props.instanceEl.content, props.instanceEl._id]);

  // Save debounce ========================================================
  useEffect(() => {
    const timerID = setTimeout(() => {
      if (props.instanceEl.content === instanceText) return;
      if (instanceText === "") return;
      saveToServer();
      console.log("💝SAVE", props.instanceEl.content);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [instanceText]);

  // // Parse HTML ===========================================================
  // const parseContentEditable = (str) => {
  //   // console.log(str);
  //   const parse5 = require("parse5");
  //   const document = parse5.parse(str);
  //   const elArr = document.childNodes[0].childNodes[1].childNodes;
  //   let newStr = "";
  //   if (elArr) {
  //     newStr = elArr
  //       .filter((el) => el.nodeName === "#text")
  //       .map((el) => el.value)
  //       .join("\n");
  //   }
  //   console.log(newStr);
  //   return newStr;
  // };
  // JSX ==================================================================
  return (
    <StyledDiv>
      <div className="instance">
        <div className="text-and-button">
          {textAreaVisible && (
            <textarea
              value={instanceText}
              onChange={handleChange}
              className="text-area"
            />
          )}
          <motion.button
            initial={{
              x: -1,
              y: -1,
              boxShadow: "1px 1px 0px 0px #000000",
              borderRadius: "4px",
            }}
            whileTap={{
              x: 0,
              y: 0,
              boxShadow: "0px 0px 0px 0px #000000",
              borderRadius: "4px",
            }}
            whileHover={{
              scale: 1.005,
            }}
            onClick={() => setTextAreaVisible((s) => !s)}
          >
            <p>{textAreaVisible ? "HIDE" : "SHOW"}</p>
          </motion.button>
        </div>
        <Mermaid className="mermaid" chart={props.instanceEl.content} />
      </div>
    </StyledDiv>
  );
}

export default MermaidInstance;

const StyledDiv = styled.div`
  width: 100%;
  border-radius: 8px;

  & .mermaid {
    margin-top: 10px;
  }

  & .instance {
    width: 100%;

    border: 4px solid #8059eb;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 15px;
    box-shadow: 3px 3px 0px 1px #000000;
  }

  & button {
    margin-top: 5px;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    margin: 0 15px;

    text-align: center;
    display: flex;
    flex-direction: center;
    justify-content: center;
    font-weight: 800;
    max-width: 55px;
    min-width: 55px;
    box-sizing: border-box;
  }
  & .is-diff {
    border: gray;
    color: gray;
  }
  & .text-area {
    width: 100%;
    resize: none;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 16px;
    overflow-y: visible;
    height: fit-content;
    height: 100px;
    border: 2px solid black;
    border-radius: 4px;
  }
  & .text-and-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: end;
  }
`;
