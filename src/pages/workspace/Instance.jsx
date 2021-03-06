import styled from "styled-components";
import TextBox from "./TextBox";
import { DeleteContext } from "../../contexts/deleteContext";
import { useState, useEffect, useCallback, useContext } from "react";
import { api } from "../../api/api";
import InstanceDeleteButton from "../../components/InstanceDeleteButton";

function Instance(props) {
  // lifted state from TextBox ============================================
  const [instanceText, setInstanceText] = useState("");
  const { deleteState } = useContext(DeleteContext);
  const { forceUpdate } = props;
  // Save to server =======================================================
  const saveToServer = useCallback(async () => {
    try {
      if (props.instanceEl.content === instanceText) return;

      await api.patch(`/instances/${props.instanceEl._id}`, {
        content: instanceText,
      });
    } catch (err) {}
  }, [instanceText, props.instanceEl.content, props.instanceEl._id]);

  const clickHandler = () => {
    saveToServer();
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (props.instanceEl.content === instanceText) return;
      if (instanceText === "") return;
      // console.log("❤️‍🔥 SAVE");
      saveToServer();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [instanceText]);

  // JSX ==================================================================
  return (
    <StyledDiv>
      <div className="instance">
        <TextBox
          instanceContent={props.instanceEl.content}
          setHandler={setInstanceText}
        ></TextBox>
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

export default Instance;

const StyledDiv = styled.div`
  width: 100%;
  border-radius: 8px;

  display: flex;
  gap: 15px;
  background-color: rgba(0, 0, 0, 0);

  & .instance {
    width: 100%;
    /* height: 150px; */
    border: 4px solid black;
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
  }
  & .is-diff {
    border: gray;
    color: gray;
  }
`;
