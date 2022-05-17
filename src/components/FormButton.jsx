import styled from "styled-components";

function FormButton(props) {
  return (
    <StyledContainer>
      <button
        name={props.nameProperty}
        onClick={props.clickHandler}
        className={`${props.theme}`}
      >
        {props.children}
      </button>
    </StyledContainer>
  );
}

export default FormButton;

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
