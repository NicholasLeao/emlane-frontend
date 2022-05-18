import styled from "styled-components";
import FloatingButton from "../../components/FloatingButton";

import imgClose from "../../assets/images/icon_close.svg";
import imgHead from "../../assets/images/icon_head.svg";
import imgLock from "../../assets/images/icon_lock.svg";
import imgLock2 from "../../assets/images/icon_lock2.svg";
import imgMenu from "../../assets/images/icon_menu.svg";
import imgPicture from "../../assets/images/icon_picture.svg";
import imgText from "../../assets/images/icon_text.svg";
import imgTrash from "../../assets/images/icon_trash.svg";

function FloatingMenu() {
  return (
    <StyledContainer>
      <FloatingButton img={imgMenu} />
      <FloatingButton img={imgText} />
      <FloatingButton img={imgPicture} />
      <FloatingButton img={imgHead} />
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

  border: 4px solid black;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: 40px;
  width: 60px;
  height: 250px;
  z-index: 4;
`;
