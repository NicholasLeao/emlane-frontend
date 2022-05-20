import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
function LanguageButton(props) {
  const [lang, setLang] = useState("pt-BR");
  const { t, i18n } = useTranslation();
  const clickHandler = (e) => {
    setLang(e.target.name);
    i18n.changeLanguage(e.target.name);
  };
  // =========================================================
  return (
    <StyledContainer>
      {lang === "pt-BR" ? (
        <button
          name="en-US"
          onClick={clickHandler}
          className={`${props.theme}`}
        >
          English
        </button>
      ) : (
        <button
          name="pt-BR"
          onClick={clickHandler}
          className={`${props.theme}`}
        >
          Português
        </button>
      )}
    </StyledContainer>
  );
}

export default LanguageButton;

const StyledContainer = styled.div`
  & button {
    padding: 8px 15px;
    border-radius: 6px;
    border: 3px solid black;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  & .red {
    background-color: #de5a53;
    border-color: #de5a53;
    color: white;
  }
  & .purple {
    background-color: #8f6fe9;
    border-color: #8f6fe9;
    color: white;
  }

  & .purple-outline {
    background-color: white;
    border-color: #8f6fe9;
    color: #8f6fe9;
  }
`;
