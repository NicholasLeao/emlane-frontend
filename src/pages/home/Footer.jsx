import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import StarIllustrationTwo from "../../assets/illustrations/star-two.png";
import StarIllustration from "../../assets/illustrations/star.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <StyledDiv>
      <section className="footer">
        <div className="box">
          <h2>{t("Social")}</h2>
          <ul>
            <a href="http://github.com">
              <li>Github</li>
            </a>
            <a href="http://linkedin.com">
              <li>Linkedin</li>
            </a>
            <a href="http://twiiter.com">
              <li>Twitter</li>
            </a>
          </ul>
        </div>
        <div className="box">
          <h2>{t("Explanation")}</h2>
          <ul>
            <Link to="/explanation/why-emlane">
              <li>{t("Why emlane?")}</li>
            </Link>
            <Link to="/explanation/how-emlane">
              <li>{t("How to use emlane?")}</li>
            </Link>
            <Link to="/explanation/design-research">
              <li>{t("Design research")}</li>
            </Link>
          </ul>
        </div>
        <div className="box">
          <h2>{t("Techonology")}</h2>
          <ul>
            <a href="https://reactjs.org/">
              <li>React</li>
            </a>
            <a href="https://nodejs.org/en/">
              <li>Node</li>
            </a>
            <a href="https://www.framer.com/motion/">
              <li>Framer Motion</li>
            </a>
            <Link to="/technology/packages">
              <li>Packages</li>
            </Link>
          </ul>
        </div>
      </section>
    </StyledDiv>
  );
}

export default Footer;

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 150px;
  font-family: "PP Neue Machina";

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
    font-family: "PP Neue Machina";

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
      font-family: "PP Neue Machina";
      text-decoration: none;
      list-style: none;
      font-size: 22px;
      margin-bottom: 12px;
      text-decoration: none;
      list-style: none;
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
