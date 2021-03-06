import styled from "styled-components";
import FloatingButton from "../../components/FloatingButton";
import { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { LaneContext } from "../../contexts/laneContext";
import { AuthContext } from "../../contexts/authContext";
import { DeleteContext } from "../../contexts/deleteContext";
import { api } from "../../api/api";
import FloatingButtonUpload from "./FloatingButtonUpload";

import imgHead from "../../assets/images/icon_head.svg";
import imgLock from "../../assets/images/icon_lock.svg";
import imgLock2 from "../../assets/images/icon_lock2.svg";
import imgMenu from "../../assets/images/icon_menu.svg";
import imgPicture from "../../assets/images/icon_picture.svg";
import imgText from "../../assets/images/icon_text.svg";
import imgTrash from "../../assets/images/icon_trash.svg";

function FloatingMenu(props) {
  //  User Ids ============================================================
  const { id: currentEngramId } = useParams();
  const { id: currentLaneId } = useContext(LaneContext).currentLane;
  const { _id: currentUserId } = useContext(AuthContext).loggedInUser.user;

  // Toggle delete context handler ========================================
  const { deleteHandler } = useContext(DeleteContext);

  //  Add new text instance ===============================================
  const addNewTextInstanceHandler = useCallback(async () => {
    try {
      // Create new instance
      const response = await api.post("/instances", {
        type: "text",
        owner: currentLaneId,
      });
      // Check for response status
      if (!response.status === 201) {
        throw new Error("Error creating instance!");
      }
      // Add new children to engram
      await api.post(`/engrams/children/${currentEngramId}`, {
        children: response.data.data.instance._id,
      });
      // Update
      props.forceUpdate();
    } catch (err) {}
  }, [currentLaneId, currentEngramId, props]);

  // Add new mermaid instance handler =====================================
  const addNewMermaidInstanceHandler = useCallback(async () => {
    try {
      // Create new instance
      const response = await api.post("/instances", {
        type: "mermaid",
        owner: currentLaneId,
      });
      // Check for response status
      if (!response.status === 201) {
        throw new Error("Error creating instance!");
      }
      // Add new children to engram
      await api.post(`/engrams/children/${currentEngramId}`, {
        children: response.data.data.instance._id,
      });
      // Update
      props.forceUpdate();
    } catch (err) {}
  }, [currentLaneId, currentEngramId, props]);

  // JSX ==================================================================
  return (
    <StyledContainer>
      <FloatingButton
        onClickHandler={addNewTextInstanceHandler}
        img={imgText}
      />
      <FloatingButton
        onClickHandler={addNewMermaidInstanceHandler}
        img={imgMenu}
      />
      <FloatingButtonUpload
        currentEngramId={currentEngramId}
        currentLaneId={currentLaneId}
        img={imgPicture}
        forceUpdate={props.forceUpdate}
      />

      <FloatingButton img={imgHead} />
      <FloatingButton img={imgLock} />
      <FloatingButton img={imgLock2} />
      <FloatingButton img={imgTrash} onClickHandler={deleteHandler} />
    </StyledContainer>
  );
}

export default FloatingMenu;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  padding: 8px 0;

  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: 40px;
  width: 60px;
  z-index: 4;
`;
