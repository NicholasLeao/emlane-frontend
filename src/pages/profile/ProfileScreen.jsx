import styled from "styled-components";
import Canvas from "../../components/Canvas";
import CapivaraIllustration from "../../assets/illustrations/capivara.png";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useTranslation } from "react-i18next";

function ProfileScreen() {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext).loggedInUser;
  let name = undefined;
  let lanes = undefined;
  if (user.name !== undefined) {
    name = user.name || "";
    lanes = user.children.length || 0;
  }
  console.log(user);

  //  JSX =================================================================
  return (
    <StyledDiv>
      <div className="work-area">
        <Canvas>
          <div className="container">
            <img src={CapivaraIllustration} alt="" />
            <div className="info-container">
              <h1>
                {t("Hello, ")} {name || "Nick"}
              </h1>
              <p>
                {t("💠 You have ")}
                {lanes || "0"}
                {t(" active lanes.")}
              </p>
            </div>
          </div>
        </Canvas>
      </div>
    </StyledDiv>
  );
}

export default ProfileScreen;

const StyledDiv = styled.div`
  height: auto;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: "PP Neue Machina";
  & .container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: flex-end;
    justify-content: center;
    font-family: "PP Neue Machina";
    z-index: 2;
    border: 4px solid black;
    padding: 25px 40px;
    border-radius: 8px;
  }
  & img {
    height: 300px;
  }
  & .work-area {
    background-color: #e6e6e6;
    width: 100vw;
    height: calc(100vh);
    margin-top: 100px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;

    box-sizing: border-box;
  }
`;
