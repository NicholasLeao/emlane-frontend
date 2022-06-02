import styled from "styled-components";
import Icon from "../assets/images/icon_close.svg";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { useCallback } from "react";

function InstanceDeleteButton(props) {
  const { id: currentEngramId } = useParams();
  const { instanceId } = props;
  const clickHandler = () => console.log(instanceId);
  const { forceUpdate } = props;

  const deleteInstanceHandler = useCallback(async () => {
    try {
      // delete instance
      const response = await api.delete(`/instances/${instanceId}`);
      // Check for response status
      if (!response.status === 204) {
        throw new Error("Error deleting instance!");
      }
      // delete children from engram
      await api.post(`/engrams/children/${currentEngramId}`, {
        children: instanceId,
      });
      // update
      forceUpdate();
    } catch (err) {
      console.log(err);
    }
  }, [currentEngramId, instanceId, forceUpdate]);

  return (
    <StyledDiv>
      <motion.div
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button id="delete-btn" onClick={deleteInstanceHandler}>
          <img alt={"delete icon"} src={Icon} />
        </button>
      </motion.div>
    </StyledDiv>
  );
}

export default InstanceDeleteButton;

const StyledDiv = styled.div`
  /* width: 20px; */

  background-color: rgba(0, 0, 0, 0);
  & img {
    background-color: rgba(0, 0, 0, 0);
  }
  & #delete-btn {
    margin-top: 5px;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    background-color: #fb0707;
    border: none;
    color: white;
    max-height: 20px;
    max-width: 20px;
    /* padding: 13px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
