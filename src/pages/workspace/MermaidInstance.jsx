import styled from "styled-components";
import TextBox from "./TextBox";
import { useState, useEffect, useCallback, useContext } from "react";
import { DeleteContext } from "../../contexts/deleteContext";
import { api } from "../../api/api";
import React from "react";
import Mermaid from "./MermaidChart";
import { motion } from "framer-motion";
import InstanceDeleteButton from "../../components/InstanceDeleteButton";
function MermaidInstance(props) {
  const { forceUpdate } = props;
  const { deleteState } = useContext(DeleteContext);
  // lifted state from TextBox ============================================
  const [instanceText, setInstanceText] = useState("");
  const [textAreaVisible, setTextAreaVisible] = useState(false);
  useEffect(() => setInstanceText(props.instanceEl.content), []);

  const handleChange = (e) => {
    setInstanceText(e.target.value);
  };

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
  }, [instanceText, saveToServer, props.instanceEl.content]);

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
            className="btn"
            onClick={() => setTextAreaVisible((s) => !s)}
          >
            <p>{textAreaVisible ? "HIDE" : "SHOW"}</p>
          </motion.button>
        </div>
        <Mermaid className="mermaid" chart={props.instanceEl.content} />
      </div>
      {deleteState && (
        <InstanceDeleteButton
          forceUpdate={forceUpdate}
          instanceId={props.instanceEl._id}
        />
      )}
    </StyledDiv>
  );
}

export default MermaidInstance;

const StyledDiv = styled.div`
  width: 100%;
  border-radius: 8px;

  display: flex;
  gap: 15px;
  background-color: rgba(0, 0, 0, 0);

  & .mermaid {
    margin-top: 10px;
  }

  & .instance {
    width: 100%;

    border: 4px solid #000000;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 15px;
    box-shadow: 3px 3px 0px 1px #000000;
  }
  & .btn {
    border: 2px solid #000000;
  }

  & .btn {
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
    border: #8fc0a9;
    color: #8fc0a9;
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
