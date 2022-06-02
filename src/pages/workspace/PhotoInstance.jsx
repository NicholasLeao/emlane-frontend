// import { useState, useCallback, useEffect } from "react";
import { api } from "../../api/api";
import styled from "styled-components";
import { DeleteContext } from "../../contexts/deleteContext";
import { useState, useEffect, useCallback, useContext } from "react";
import InstanceDeleteButton from "../../components/InstanceDeleteButton";
function PhotoInstance(props) {
  const {forceUpdate} = props
  const { deleteState } = useContext(DeleteContext);
  return (
    <StyledDiv>
      <div className="container">
        <div className="instance">
          <img src={props.instanceEl.asset} alt="User upload" />
        </div>
        {deleteState && (
          <InstanceDeleteButton forceUpdate={forceUpdate} instanceId={props.instanceEl._id} />
        )}
      </div>
    </StyledDiv>
  );
}

export default PhotoInstance;

const StyledDiv = styled.div`
  width: 100%;
  /* border-radius: 8px; */
  /* height: 150px; */
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;

  & .container {
    display: flex;
    gap: 15px;
    background-color: rgba(0, 0, 0, 0);
  }

  & img {
    max-width: 220px;
    /* border-radius: 8px; */
  }

  & .instance {
    width: fit-content;
    /* height: 150px; */
    border: 4px solid black;
    border-radius: 8px;
    box-sizing: border-box;
    /* padding: 10px 15px; */
    box-shadow: 3px 3px 0px 1px #000000;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
