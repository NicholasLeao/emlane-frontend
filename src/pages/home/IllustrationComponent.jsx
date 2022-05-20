import styled from "styled-components";
import { useTranslation } from "react-i18next";

import StarIllustrationTwo from "../../assets/illustrations/star-two.png";
import StarIllustration from "../../assets/illustrations/star.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function IllustrationComponent() {
  const { t } = useTranslation();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <StyledDiv>
      <section className="illustration">
        <img
          className="character-illustration"
          src={StarIllustrationTwo}
          alt="character"
        />
        <img
          className="star-illustration"
          src={StarIllustration}
          alt="character"
        />
        <div className="h3-container">
          <motion.div
            style={{
              backgroundColor: "rgba(0,0,0,0)",
            }}
            initial={{
              x: -150,
            }}
            whileHover={{
              x: -800,
            }}
            transition={{
              duration: 5,
            }}
            // dragConstraints={{ left: 2, right: 2, top: 0, bottom: 0 }}
            // drag={"x"}
            // dragElastic={0.2}
            // dragSnapToOrigin={true}
          >
            <h3 className="illustration-h3">
              {t("REMEMBER")} --> {t("FORGET")} --> {t("REMEMBER")} -->{" "}
              {t("FORGET")} --> {t("REMEMBER")} --> {t("FORGET")} -->{" "}
              {t("REMEMBER")}
            </h3>
          </motion.div>
        </div>
      </section>
    </StyledDiv>
  );
}

export default IllustrationComponent;

const StyledDiv = styled.div`
  text-align: center;
  font-family: "PP Neue Machina";

  & .illustration {
    background-color: #d63939;
    border: 8px solid black;
    margin: 50px 50px;
    border-radius: 25%;
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & .h3-container {
      background-color: rgba(0, 0, 0, 0);
      /* border: 2px solid blue; */
      width: 100%;
      margin: auto;
      overflow-x: hidden;
    }
    & .character-illustration {
      height: 40%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0);
      top: 200px;
      right: 150px;
    }

    & .star-illustration {
      height: 50%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0);
      top: -60px;
      left: 150px;
    }

    & .illustration-h3 {
      /* border: 2px solid pink; */
      margin: auto;
      font-size: 55px;
      white-space: nowrap;
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
