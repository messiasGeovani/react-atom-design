import React from "react";
import { useRouter } from "next/router";

import { AnimatedDiv } from "@components/Animated";
import { Box } from "@components/atoms";
import { BaseDiv } from "@components/Base";
import { AuthForm } from "@components/organisms";

import { Background, LoginBanner } from "./styles";

export default function Login() {
  const router = useRouter();
  const redirectToSignUp = () => router.push("/signup");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
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
            alternateForm={redirectToSignUp}
            handleSubmit={handleLogin}
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
