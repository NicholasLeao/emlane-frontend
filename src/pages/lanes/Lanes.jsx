import styled from "styled-components";
import Lane from "./Lane";
import { useState, useEffect, useCallback, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import axios from "axios";
import { api } from "../../api/api";
function Lanes(props) {
  const { _id: currentUserId } = useContext(AuthContext).loggedInUser.user;

  //  Instance fetch ======================================================
  const [laneArray, setLaneArray] = useState([]);

  const fetchLanes = useCallback(async () => {
    try {
      const response = await api.get(`/users/children/${currentUserId}`);
      if (response) {
        setLaneArray(response.data.children);
        console.log("🐕", response);
      }
    } catch (err) {
      console.log(err);
    }
  }, [currentUserId]);

  useEffect(() => {
    fetchLanes();
  }, [fetchLanes, props.updateToken]);
  // JSX ==================================================================
  return (
    <StyledContainer>
      {laneArray.map((el) => (
        <Lane key={`Lane_${Math.random()}`} laneElement={el} />
      ))}
    </StyledContainer>
  );
}

export default Lanes;

const StyledContainer = styled.div`
  /* border: 4px solid red; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  height: fit-content;
  width: fit-content;
  /* align-items: center; */
  /* justify-content: space-between; */
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
  /* min-width: 800px; */
  overflow-y: scroll;
  min-width: 150px;
  max-width: 75%;
  padding: 40px 15px;

  & .lane {
    min-width: 150px;
    height: 220px;
    border: 4px solid black;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
