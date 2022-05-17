import styled from "styled-components";
import FormButton from "../../components/FormButton";
import { useState, useEffect, useCallback } from "react";

function Home() {

  return (
    <StyledDiv>
      <section className="hero">
        <h1>Learn, forget, remember.</h1>
        <div className="p-container">
          <p>
            A simple tool that can help you keep information for late.
            <br /> Edit, save and review your content wherever you are.
            <br /> Engage with your notes in less stressful way.
          </p>
        </div>
        <FormButton theme="purple-outline" nameProperty="signup">
          Create a free account!
        </FormButton>
      </section>
    </StyledDiv>
  );
}

export default Home;

const StyledDiv = styled.div`
  text-align: center;

  & h1 {
    font-size: 52px;
    font-weight: 800;
    margin-bottom: 36px;
  }

  & p {
    font-size: 20px;
    margin-bottom: 28px;
  }

  & .hero {
    border: 4px solid green;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
