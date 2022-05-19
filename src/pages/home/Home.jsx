import styled from "styled-components";
import FormButton from "../../components/FormButton";
import { AuthContext } from "../../contexts/authContext";
import { ModalContext } from "../../contexts/modalContext";
import { useContext } from "react";
import { motion } from "framer-motion";

import CharacterIllustration from "../../assets/illustrations/character_reading.png";
import StarIllustration from "../../assets/illustrations/star.png";

function Home() {
  const { loggedInUser } = useContext(AuthContext);
  const { modalHandler } = useContext(ModalContext);

  return (
    <StyledDiv>
      <section className="hero">
        <h1>
          It's ok to forget.
          <br />
          It's fun to remember.
        </h1>

        <motion.div
          drag
          className="p-container"
          dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
        >
          <p>
            A simple tool can help you keep information for later.
            <br /> Edit, save and review your content wherever you are.
            <br /> Engage with your notes in a simpler way.
          </p>
        </motion.div>
      </section>

      <section className="illustration">
        <img
          className="character-illustration"
          src={CharacterIllustration}
          alt="character"
        />
        <img
          className="star-illustration"
          src={StarIllustration}
          alt="character"
        />
        <h3 className="illustration-h3">REMEMBER --> FORGET --> REMEMBER</h3>
      </section>
      <section className="explanation"></section>
      <section className="footer">
        <div className="box">
          <h2>Social</h2>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="box">
          <h2>Explanation</h2>
          <ul>
            <li>Why emlane?</li>
            <li>How to use emlane?</li>
            <li>Design research</li>
          </ul>
        </div>
        <div className="box">
          <h2>Techonology</h2>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Framer Motion</li>
            <li>Packages</li>
          </ul>
        </div>
      </section>

      {/* ==================== MODAL =========================== */}
      {!loggedInUser && (
        <FormButton
          onClick={() => modalHandler("signup")}
          theme="purple-outline"
          nameProperty="signup"
        >
          Create a free account!
        </FormButton>
      )}
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
    /* border: 4px solid green; */
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .p-container {
      padding: 15px;
      border-radius: 12px;
      border: 4px solid black;
      box-shadow: 6px 6px 0px 1px #000000;
    }
  }

  & .illustration {
    background-color: #d63939;
    border: 8px solid black;
    margin: 50px 50px;
    border-radius: 25%;
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & .character-illustration {
      height: 70%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0);
      top: 300px;
      right: 150px;
    }

    & .star-illustration {
      height: 220px;
      position: absolute;
      background-color: rgba(0, 0, 0, 0);
      top: -60px;
      left: 150px;
    }

    & .illustration-h3 {
      margin: auto;
      font-size: 52px;
      color: white;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  & .explanation {
    height: 300px;
  }

  & .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 120px;
    border: 4px solid black;

    background-color: #ffc700;
    height: 300px;
    gap: 15px;

    & .box {
      text-align: left;
      /* border: 2px solid black; */
      height: 80%;
      width: 320px;
      padding: 20px 15px;
      background-color: rgba(0, 0, 0, 0);
    }

    & h2 {
      font-size: 28px;
      margin-bottom: 15px;
      background-color: rgba(0, 0, 0, 0);
    }

    & ul {
      background-color: rgba(0, 0, 0, 0);
    }
    & li {
      font-size: 22px;
      margin-bottom: 12px;
      text-decoration: none;
      list-style: none;
      background-color: rgba(0, 0, 0, 0);
    }
  }
  

`;
