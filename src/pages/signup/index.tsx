import React from "react";
import { useRouter } from "next/router";

import { AnimatedDiv } from "@components/Animated";
import { Box } from "@components/atoms";
import { BaseDiv } from "@components/Base";
import { AuthForm } from "@components/organisms";

import { Background, LoginBanner } from "./styles";

export default function SignUp() {
  const router = useRouter();

  const redirectToLogin = () => router.back();

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/profile");
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
