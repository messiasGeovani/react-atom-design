import React from "react";

import { useHistory } from "react-router-dom";
import { AnimatedDiv } from "../../components/Animated";
import { BaseDiv } from "../../components/Base";
import { AuthForm } from "../../components/organisms/Forms/AuthForm";
import { Background, LoginBanner, WhiteBox } from "./styles";

export default function Login() {
  const history = useHistory();

  const redirectToSignUp = () => history.push("/signup");
  
  const handleLogin = (event) => {
    event.preventDefault();
    history.push("/profile");
  };

  return (
    <Background>
      <BaseDiv
        flex
        alignItems="center"
        justifyContent="space-between"
        fullHeight
      >
        <WhiteBox
          flex
          column
          alignItems="center"
          justifyContent="center"
          fullWidth
          fullHeight
        >
          <AuthForm
            alternateForm={redirectToSignUp}
            handleSubmit={handleLogin}
          />
        </WhiteBox>
        <WhiteBox fullWidth fullHeight>
          <AnimatedDiv
            flex
            alignItems="center"
            justifyContent="center"
            fullWidth
            fullHeight
            duration={0.8}
            animation="fadeInZoomIn"
            fillMode="backwards"
          >
            <LoginBanner />
          </AnimatedDiv>
        </WhiteBox>
      </BaseDiv>
    </Background>
  );
}