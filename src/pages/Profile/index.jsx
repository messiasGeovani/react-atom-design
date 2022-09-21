import React from "react";
import { AnimatedBox } from "../../components/Animated";

import { UserForm } from "../../components/organisms/Forms";

import { Background } from "./styles";

export default function Profile() {
  return (
    <Background flex alignItems="center" justifyContent="center">
      <AnimatedBox
        duration={0.5}
        animation="fadeInZoomIn"
        fillMode="backwards"
        padding={5}
      >
        <UserForm />
      </AnimatedBox>
    </Background>
  );
}
