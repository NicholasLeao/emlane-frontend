import styled from "styled-components";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  //  Form change handler =================================================
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //  Form submit handler =================================================
  const [formSubmitState, setFormSubmitState] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setFormSubmitState(formState);
  };

  const postSubmitState = useCallback(async () => {
    if (!formSubmitState.email) return;
    const response = await axios.post(
      "http://127.0.0.1:8000/users/login",
      formSubmitState
    );
    if (response.status === 200) {
      // HANDLE TOKEN
      response.data.token && console.log("🏪", response.data.token);
      response.data.data.user && console.log("🙃", response.data.data.user);

      // NAVIGATE
      navigate("/");
    }
  }, [formSubmitState, navigate]);

  useEffect(() => {
    postSubmitState();
  }, [formSubmitState, postSubmitState]);
  //  JSX =================================================================
  return (
    <form>
      <StyledDiv
        as={motion.div}
        initial={{
          borderRadius: "12px",
          boxShadow: "3px 5px 0px 1px #000000",
        }}
        whileHover={{
          boxShadow: "8px 7px 0px 1px #000000",
          borderRadius: "12px",
          transition: { duration: 0.5 },
        }}
      >
        <div className="login-modal">
          <FormInput
            nameProperty="email"
            valueName="Email"
            placeholder="evangelion1978@uol.com.br"
            inputType="text"
            changeHandler={changeHandler}
            valueState={formState.email}
          />

          <FormInput
            nameProperty="password"
            valueName="Password"
            placeholder=""
            inputType="password"
            changeHandler={changeHandler}
            valueState={formState.password}
          />

          <FormButton
            onClick={submitHandler}
            nameProperty="confirm"
            coloured={true}
          >
            Confirm
          </FormButton>
        </div>
      </StyledDiv>
    </form>
  );
}

export default Login;

const StyledDiv = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
  }
`;