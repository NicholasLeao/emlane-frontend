import styled from "styled-components";

function FormInput(props) {
  return (
    <StyledContainer>
      <label htmlFor={props.valueName}>{props.valueName}</label>
      <input
        name={props.nameProperty}
        onChange={props.changeHandler}
        value={props.valueState}
        placeholder={props.placeholder}
        type={props.inputType}
      ></input>
    </StyledContainer>
  );
}

export default FormInput;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;


  & label {
    margin-bottom: 8px;
  }
  & input {
    border: 3px solid black;
    border-radius: 5px;
    padding: 8px 10px;
  }
`;
