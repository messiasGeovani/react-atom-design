import React from "react";
import { useHistory } from "react-router-dom";

import { AnimatedDiv } from "../../components/Animated";
import { Box } from "../../components/atoms";
import { BaseDiv } from "../../components/Base";

import { AuthForm } from "../../components/organisms/Forms";

import { Background, LoginBanner } from "./styles";

export default function SignUp() {
  const history = useHistory();

  const redirectToLogin = () => history.goBack();

  const handleSignUp = (event) => {
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
        <Box
          flex
          column
          alignItems="center"
          justifyContent="center"
          fullWidth
          fullHeight
        >
          <AuthForm
            isRegister
            alternateForm={redirectToLogin}
            handleSubmit={handleSignUp}
          />
        </Box>
        <Box fullWidth fullHeight>
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
        </Box>
      </BaseDiv>
    </Background>
  );
}
