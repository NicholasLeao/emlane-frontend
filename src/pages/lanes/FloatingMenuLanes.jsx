import styled from "styled-components";
import FloatingButton from "../../components/FloatingButton";
import { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LaneContext } from "../../contexts/laneContext";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";

// Images
import imgClose from "../../assets/images/icon_close.svg";
import imgHead from "../../assets/images/icon_head.svg";
import imgLock from "../../assets/images/icon_lock.svg";
import imgLock2 from "../../assets/images/icon_lock2.svg";
import imgMenu from "../../assets/images/icon_menu.svg";
import imgPicture from "../../assets/images/icon_picture.svg";
import imgText from "../../assets/images/icon_text.svg";
import imgTrash from "../../assets/images/icon_trash.svg";

function FloatingMenuNav(props) {
  //  User Ids ============================================================
  const { id: currentEngramId } = useParams();
  const { id: currentLaneId } = useContext(LaneContext).currentLane;
  const { _id: currentUserId } = useContext(AuthContext).loggedInUser.user;

  //  Add new text instance ===============================================
  const addNewLaneHandler = useCallback(async () => {
    try {
      // Create new lane
      const response = await api.post("/lanes", {
        title: "New Lane",
        owner: currentUserId,
      });
      console.log("🚒", response);
      // Check for response status
      if (!response.status === 201) {
        throw new Error("Error creating lane!");
      }
      // Add new children to user
      const response2 = await api.post(`/users/children/${currentUserId}`, {
        children: response.data.data.lane._id,
      });
      console.log("🧑‍🏫", response2);
      // Update
      props.forceUpdate();
    } catch (err) {}
  }, [currentUserId, props]);

  // JSX ==================================================================
  return (
    <StyledContainer>
      <FloatingButton onClickHandler={addNewLaneHandler} img={imgText} />
      <FloatingButton img={imgMenu} />
      <FloatingButton img={imgPicture} />
      <FloatingButton img={imgHead} />
      <FloatingButton img={imgClose} />
      <FloatingButton img={imgLock} />
      <FloatingButton img={imgLock2} />
      <FloatingButton img={imgTrash} />
    </StyledContainer>
  );
}

export default FloatingMenuNav;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  padding: 8px 0;

  /* border: 4px solid black; */
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: 40px;
  width: 60px;
  z-index: 4;
`;
