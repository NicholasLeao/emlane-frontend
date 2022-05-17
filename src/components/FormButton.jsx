import styled from "styled-components";

function FormButton(props) {
  return (
    <StyledButton
      name={props.nameProperty}
      onChange={props.changeHandler}
      className={`${props.coloured ? "coloured" : "normal"}`}
    >
      {props.children}
    </StyledButton>
  );
}

export default FormButton;

const StyledButton = styled.button`
  margin-top: 15px;
  padding: 8px 15px;
  border-radius: 6px;
  border: 3px solid black;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  & .coloured {
    background-color: black;
  }
  & .normal {
  }
`;
