import React from "react";
import { useHistory } from "react-router-dom";
import { AnimatedDiv } from "../../components/Animated";
import { BaseDiv } from "../../components/Base";
import { AuthForm } from "../../components/organisms/Forms/AuthForm";
import { Background, LoginBanner, WhiteBox } from "./styles";

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
        <WhiteBox
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
