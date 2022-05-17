import Canvas from "../../components/Canvas";
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { motion } from "framer-motion";

function Login() {
  return (
    <>
      <StyledDiv
        as={motion.div}
        initial={{
          borderRadius: "12px",
          boxShadow: "3px 5px 0px 1px #000000",
        }}
        whileHover={{
          x: -3,
          y: -3,
          boxShadow: "8px 7px 0px 1px #000000",
          borderRadius: "12px",
          transition: { duration: 1 },
        }}
      >
        <div className="login-modal">
          <FormInput
            nameProperty="email"
            valueName="Email"
            placeholder="evangelion1978@uol.com.br"
            inputType="email"
            changeHandler={""}
            valueState={""}
          />
          <FormInput
            nameProperty="username"
            valueName="Username"
            placeholder="NickLeao"
            inputType="text"
            changeHandler={""}
            valueState={""}
          />
          <FormInput
            nameProperty="password"
            valueName="Password"
            placeholder=""
            inputType="password"
            changeHandler={""}
            valueState={""}
          />
          <FormInput
            nameProperty="passwordConfirm"
            valueName="Confirm Password"
            placeholder=""
            inputType="password"
            changeHandler={""}
            valueState={""}
          />

          <FormButton nameProperty="confirm" onChange={""} coloured={true}>
            Confirm
          </FormButton>

          <p>
            Already a user? <a href="/">Log in.</a>
          </p>
        </div>
      </StyledDiv>
    </>
  );
}

export default Login;

const StyledDiv = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;

  & p {
    margin-top: 15px;
  }

  & .login-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    border: 4px solid black;
    width: 350px;
    padding: 35px 20px 40px 20px;
    border-radius: 12px;
    box-shadow: 3px 5px 0px 1px #000000;
  }
`;
