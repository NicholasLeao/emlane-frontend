import styled from "styled-components";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ModalContext } from "../contexts/modalContext";
import Backdrop from "./Backdrop";
function Login() {
  const navigate = useNavigate();
  //  Form change handler =================================================
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  //  Form submit handler =================================================
  const [formSubmitState, setFormSubmitState] = useState({});
  const { setLoggedInUser } = useContext(AuthContext);
  const { modalHandler } = useContext(ModalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormSubmitState(formState);
  };

  const postSubmitState = useCallback(async () => {
    if (!formSubmitState.email) return;

    const response = await axios.post(
      "http://127.0.0.1:8000/users/signup",
      formSubmitState
    );

    // console.log("📰", response);
    if (response.status === 201) {
      //  Handle response
      response.data.token && console.log("🏪", response.data.token);
      response.data.user && console.log("🙃", response.data.user);
      response.data.status = undefined;
      setLoggedInUser({ ...response.data.user });
      localStorage.setItem("emlane-user", JSON.stringify(response.data));

      //  Handle UI
      modalHandler("none");
      navigate("/");
    }
  }, [formSubmitState, navigate, modalHandler, setLoggedInUser]);

  useEffect(() => {
    postSubmitState();
  }, [formSubmitState, postSubmitState]);
  //  JSX =================================================================
  const changeHandler = (e) => {
    setFormState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <StyledDiv
        as={motion.div}
        initial={{
          borderRadius: "12px",
          boxShadow: "3px 5px 0px 1px #000000",
        }}
        whileHover={{
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
            changeHandler={changeHandler}
            valueState={formState.email}
          />
          <FormInput
            nameProperty="name"
            valueName="Username"
            placeholder="NickLeao"
            inputType="text"
            changeHandler={changeHandler}
            valueState={formState.name}
          />
          <FormInput
            nameProperty="password"
            valueName="Password"
            placeholder=""
            inputType="password"
            changeHandler={changeHandler}
            valueState={formState.password}
          />
          <FormInput
            nameProperty="passwordConfirm"
            valueName="Confirm Password"
            placeholder=""
            inputType="password"
            changeHandler={changeHandler}
            valueState={formState.passwordConfirm}
          />

          <FormButton
            nameProperty="confirm"
            onClick={submitHandler}
            coloured={true}
          >
            Confirm
          </FormButton>

          <p>
            Already a user? <a href="/">Log in.</a>
          </p>
        </div>
      </StyledDiv>
      <Backdrop/>
    </>
  );
}

export default Login;

const StyledDiv = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  z-index: 3;

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
    box-shadow: 3px 5px 0px 1px #000000;
  }
`;
