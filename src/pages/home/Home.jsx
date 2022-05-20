import styled from "styled-components";
import FormButton from "../../components/FormButton";
import { AuthContext } from "../../contexts/authContext";
import { ModalContext } from "../../contexts/modalContext";
import { useContext } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

import StarIllustrationTwo from "../../assets/illustrations/star-two.png";
import StarIllustration from "../../assets/illustrations/star.png";
import IllustrationComponent from "./IllustrationComponent";
import Footer from "./Footer";

function Home() {
  const { t } = useTranslation();

  const { loggedInUser } = useContext(AuthContext);
  const { modalHandler } = useContext(ModalContext);

  return (
    <StyledDiv>
      <section className="hero">
        <h1>
          {t("It's okay to forget.")}
          <br />
          {t("It's fun to remember.")}
        </h1>

        <motion.div
          drag
          className="p-container"
          dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
        >
          <p>
            {t("A simple tool can help you keep information for later.")}
            <br /> {t("Edit, save and review your content wherever you are.")}
            <br /> {t("Engage with your notes in a simpler way.")}
          </p>
        </motion.div>
      </section>
      {/* ============================================================ */}
      <IllustrationComponent />
      <Footer />

      {/* ==================== MODAL =========================== */}
      {!loggedInUser && (
        <FormButton
          onClick={() => modalHandler("signup")}
          theme="purple-outline"
          nameProperty="signup"
        >
          {t("Create a free account!")}
        </FormButton>
      )}
    </StyledDiv>
  );
}

export default Home;

const StyledDiv = styled.div`
  text-align: center;
  overflow-x: hidden;
  font-family: "PP Neue Machina";

  & h1 {
    font-size: 52px;
    font-weight: 800;
    margin-bottom: 36px;
    font-family: "PP Neue Machina";
    color: #8338EC;
  }

  & p {
    font-size: 20px;
    margin-bottom: 28px;
    font-family: "PP Neue Machina";
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
    background-color: #FB5607;
    border: 8px solid black;
    margin: 50px 50px;
    border-radius: 25%;
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "PP Neue Machina";

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
      font-family: "PP Neue Machina";
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

    background-color: #FFBE0B;
    height: 300px;
    gap: 15px;

    & .box {
      text-align: center;
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
